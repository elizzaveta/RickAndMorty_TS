import React, {useEffect, useState} from 'react';
import {catalogProps, episodesProps} from "../../consts/apiResponseTypes";
import {Link, useSearchParams} from "react-router-dom";
import {getEpisodes, getEpisodesCatalog} from "../../api/GET";
import styles from "../../styles/css/pages/home/Catalog.module.css";
import Pagination from "../../components/Pagination";

const Episodes = () => {
    const [episodes, setEpisodes] = useState<episodesProps>();
    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        (async function fetchCatalog() {
            const response = await getEpisodesCatalog(searchParams.toString());
            const data = await response.json();
            setEpisodes({
                info: await data.info,
                episodes: await data.results
            })
        })();

    }, [searchParams])
    return (
        <div className={styles.wrapper}>
            <div id="topView"></div>
            <div className={`container`}>
                <h1 className={`orangeText`}>Rick And Morty Episodes</h1>
                {episodes && episodes.episodes.map((episode)=>{
                    return(
                        <h2><Link to={`/episode/${episode.id}`} className={`clickableText whiteText`}>{episode.episode}: {episode.name}</Link></h2>
                    )
                })}
            </div>

            <Pagination pages={episodes?.info.pages} path="/episodes"/>
        </div>
    )
};

export default Episodes;