import React, {useEffect, useState} from 'react';
import {getCatalog} from "../../api/GET";
import CharacterCard from "./CharacterCard";
import {catalogProps} from "../../consts/propsTypes";
import styles from "../../styles/css/pages/home/Catalog.module.css"
import {useParams, useSearchParams} from "react-router-dom";
import Pagination from "../../components/Pagination";
import {type} from "os";


const Catalog = () => {
    const [catalog, setCatalog] = useState<catalogProps>();
    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        (async function fetchCatalog() {
            console.log(searchParams)
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
            <div id="catalogTog" className={`container ${styles.totalCharacters}`}>
                Total characters: {catalog?.info.count}
            </div>
            <div className={`container ${styles.cardsWrapper}`}>
                {catalog?.characters.map((character) => {
                    return (
                        <CharacterCard character={character} key={character.id}/>
                    );
                })}
            </div>
            <Pagination pages={catalog?.info.pages}/>
        </div>
    );
};

export default Catalog;