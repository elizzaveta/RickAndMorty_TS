import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {getCatalog} from "../../api/GET";
import {NotFoundEnum} from "../../enums/NotFoundEnum";
import {characterCatalogType} from "../../types/apiResponseTypes";
import Hero from "./Hero";
import CharacterCard from "./CharacterCard";
import Pagination from "../../components/pagination/Pagination";
import NotFound from "../../components/NotFound";
import Loading from "../../components/Loading";
import styles from "../../assets/css/pages/home/Catalog.module.css"


const Catalog = () => {
    const [catalog, setCatalog] = useState<characterCatalogType | null>(null);
    let [searchParams] = useSearchParams();
    let [alt, setAlt] = useState<JSX.Element>(<Loading/>)

    useEffect(() => {
        (async function fetchCatalog() {
            setCatalog(null);
            await getCatalog(window.location.search)
                .then(data => {
                    setCatalog({
                        info: data.info,
                        characters: data.results
                    })
                })
                .catch(() => setAlt(<NotFound type={NotFoundEnum.NO_RESULT}/>));


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
                : alt
            }

        </>

    );
};

export default Catalog;