import React, {useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";
import {episodeCatalogType} from "../../types/apiResponseTypes";
import Pagination from "../../components/pagination/Pagination";
import styles from "../../assets/css/pages/episodes/Episodes.module.css";
import {fetchEpisodes} from "../../api/episodes/fetchEpisodes";
import {ErrorType} from "../../types/errorType";

const Episodes = () => {
    const [episodes, setEpisodes] = useState<episodeCatalogType>();
    const [searchParams] = useSearchParams();
    const [error, setError] = useState<ErrorType>({isError: false})

    if(error.isError) throw new Error(error.message);

    useEffect(() => {
        fetchEpisodes(searchParams.toString())
            .then(data => {
                setEpisodes({
                    info: data.info,
                    episodes: data.results
                })
            })
            .catch((e) => setError({isError: true, message: e}));
    }, [searchParams])

    return (
        <div className={styles.wrapper}>
            <div id="topView"></div>
            <div className={`container`}>
                <h1 className={`orangeText`}>Rick And Morty Episodes</h1>
                {episodes &&
                    episodes.episodes.map((episode) => {
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