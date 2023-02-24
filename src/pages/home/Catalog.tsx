import React, {useEffect, useState} from 'react';
import {getCatalog} from "../../api/GET";
import CharacterCard from "./CharacterCard";
import {catalogProps} from "../../consts/apiResponseTypes";
import styles from "../../styles/css/pages/home/Catalog.module.css"
import {useSearchParams} from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";
import NotFound from "../../components/NotFound";
import Hero from "./Hero";
import {NotFoundEnum} from "../../enums/NotFoundEnum";


const Catalog = () => {
    const [catalog, setCatalog] = useState<catalogProps | null>(null);
    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        (async function fetchCatalog() {
            const response = await getCatalog(window.location.search);
            await response.json()
                .then((result) => {
                    setCatalog({
                        info: result.info,
                        characters: result.results
                    })
                })

        })();

    }, [searchParams])
    return (
        <>
            {catalog?.info
                ? <>
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
                : <NotFound type={NotFoundEnum.NO_RESULT}/>
            }

        </>

    );
};

export default Catalog;