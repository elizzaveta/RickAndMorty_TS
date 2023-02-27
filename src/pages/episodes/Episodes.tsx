import React, {useEffect, useState} from 'react';
import {episodesProps} from "../../consts/apiResponseTypes";
import {Link, useSearchParams} from "react-router-dom";
import {getEpisodesCatalog} from "../../api/GET";
import styles from "../../styles/css/pages/episodes/Episodes.module.css";
import Pagination from "../../components/pagination/Pagination";

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
                {episodes && episodes.episodes.map((episode) => {
                    return (
                        <>
                            {episode.episode.includes("E01")
                                ? <p className={styles.title}>Season {episode.episode.substring(1, 3)}</p>
                                : null
                            }
                            <h2><Link to={`/episode/${episode.id}`}
                                      className={`clickableText`}>{episode.episode}: {episode.name}</Link></h2>
                        </>
                    )
                })}
            </div>

            <Pagination pages={episodes?.info.pages}/>
        </div>
    )
};

export default Episodes;