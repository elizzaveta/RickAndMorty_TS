import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getEpisodes} from "../../api/GET";
import {episodeType} from "../../consts/apiResponseTypes";
import {getIdsFromUrls} from "../../functions";
import Characters from "./Characters";
import styles from "../../styles/css/pages/episode/Episode.module.css"
import Loading from "../../components/Loading";
import NotFound from "../../components/NotFound";
import {NotFoundEnum} from "../../enums/NotFoundEnum";

const Episode = () => {
    const {id} = useParams();
    const [episode, setEpisode] = useState<episodeType>();
    const [characters, setCharacters] = useState<number[]>()
    const [alt, setAlt] = useState<JSX.Element>(<Loading/>)

    useEffect(() => {
        (async function () {
            await getEpisodes(String(id))
                .then(data=>{
                    setEpisode(data)
                    setCharacters(getIdsFromUrls(data.characters))
                })
                .catch(() => setAlt(<NotFound type={NotFoundEnum.NO_RESULT}/>));
        })();
    }, [id])

    return (
        <div className={styles.wrapper}>
            {episode ?
                <div className={`container ${styles.episodeInfoContainer}`}>
                    <div>
                        <h1>{episode.episode} : {episode.name}</h1>
                        <p><b>Release Date:</b> {episode.air_date}</p>
                    </div>
                    {characters && <Characters charactersIds={characters}/>}
                </div>
                : alt
            }
        </div>
    );
};

export default Episode;