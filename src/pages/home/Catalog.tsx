import React, {useEffect, useState} from 'react';
import {getCatalog} from "../../api/GET";
import CharacterCard from "./CharacterCard";
import {catalogProps} from "../../consts/apiResponseTypes";
import styles from "../../styles/css/pages/home/Catalog.module.css"
import {useSearchParams} from "react-router-dom";
import Pagination from "../../components/Pagination";


const Catalog = () => {
    const [catalog, setCatalog] = useState<catalogProps>();
    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        (async function fetchCatalog() {
            const response = await getCatalog(window.location.search);
            const data = await response.json();
            setCatalog({
                info: await data.info,
                characters: await data.results
            })
        })();

    }, [searchParams])
    return (
        <div className={styles.wrapper}>
            <div id="topView"></div>
            <div className={`container ${styles.totalCharacters}`}>
                Total characters: {catalog?.info.count}
            </div>
            <div className={`container ${styles.cardsWrapper}`}>
                {catalog?.characters.map((character) => {
                    return (
                        <CharacterCard character={character} key={character.id}/>
                    );
                })}
            </div>
            <Pagination pages={catalog?.info.pages} path=""/>
        </div>
    );
};

export default Catalog;