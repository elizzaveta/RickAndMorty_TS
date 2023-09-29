import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {characterCatalogType} from "../../types/apiResponseTypes";
import Hero from "./Hero";
import CharacterCard from "./CharacterCard";
import Pagination from "../../components/pagination/Pagination";
import styles from "../../assets/css/pages/home/Catalog.module.css"
import {fetchCharactersByPage} from "../../api/characters/fetchCharactersByPage";
import {ErrorType} from "../../types/errorType";


const Catalog = () => {
    const [catalog, setCatalog] = useState<characterCatalogType | null>(null);
    let [searchParams] = useSearchParams();
    let [error, setError] = useState<ErrorType>({isError: false});

    if(error.isError) throw new Error(error.message);

    useEffect(() => {
        setCatalog(null);
        fetchCharactersByPage(window.location.search)
            .then(data => {
                setCatalog({
                    info: data.info,
                    characters: data.results
                })
            })
            .catch((e) => setError({isError: true, message: e}));

    }, [searchParams])
    return (
        <>
            {catalog &&
                <>
                    <Hero/>
                    <div className={styles.wrapper}>
                        <div id="topView"></div>

                        <div className={`container ${styles.totalCharacters}`}>
                            Total characters: {catalog.info.count}
                        </div>
                        <div className={`container ${styles.cardsWrapper}`}>
                            {catalog.characters.map((character) => {
                                return (
                                    <CharacterCard character={character} key={character.id}/>
                                );
                            })}
                        </div>
                        <Pagination pages={catalog.info.pages}/>
                    </div>
                </>
            }

        </>

    );
};

export default Catalog;