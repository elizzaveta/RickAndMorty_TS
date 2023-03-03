import React, {useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";
import {episodeCatalogType} from "../../types/apiResponseTypes";
import {NotFoundEnum} from "../../enums/NotFoundEnum";
import {getEpisodes} from "../../api/GET";
import Loading from "../../components/Loading";
import NotFound from "../../components/NotFound";
import Pagination from "../../components/pagination/Pagination";
import styles from "../../assets/css/pages/episodes/Episodes.module.css";

const Episodes = () => {
    const [episodes, setEpisodes] = useState<episodeCatalogType>();
    let [searchParams] = useSearchParams();
    const [alt, setAlt] = useState<JSX.Element>(<Loading/>)

    useEffect(() => {
        (async function fetchCatalog() {
            await getEpisodes(searchParams.toString())
                .then(data => {
                    setEpisodes({
                        info: data.info,
                        episodes: data.results
                    })
                })
                .catch(() => setAlt(<NotFound type={NotFoundEnum.NO_RESULT}/>));
        })();

    }, [searchParams])
    return (
        <div className={styles.wrapper}>
            <div id="topView"></div>
            <div className={`container`}>
                <h1 className={`orangeText`}>Rick And Morty Episodes</h1>
                {episodes
                    ? episodes.episodes.map((episode) => {
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
                    })
                    : alt}
            </div>

            <Pagination pages={episodes?.info.pages}/>
        </div>
    )
};

export default Episodes;