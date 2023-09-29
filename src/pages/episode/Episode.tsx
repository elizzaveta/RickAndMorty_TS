import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {episodeType} from "../../types/apiResponseTypes";
import {NotFoundEnum} from "../../enums/NotFoundEnum";
import {getIdsFromUrls} from "../../utils/functions";
import Characters from "./Characters";
import Loading from "../../components/Loading";
import NotFound from "../../components/NotFound";
import styles from "../../assets/css/pages/episode/Episode.module.css"
import {fetchEpisodes} from "../../api/episodes/fetchEpisodes";

const Episode = () => {
    const {id} = useParams();
    const [episode, setEpisode] = useState<episodeType>();
    const [characters, setCharacters] = useState<number[]>()
    const [alt, setAlt] = useState<JSX.Element>(<Loading/>)

    useEffect(() => {
        fetchEpisodes(String(id))
            .then(data=>{
                setEpisode(data)
                setCharacters(getIdsFromUrls(data.characters))
            })
            .catch(() => setAlt(<NotFound type={NotFoundEnum.NO_RESULT}/>));
    }, [id])

    return (
        <div className={styles.wrapper}>
            {episode ?
                <div className={`container ${styles.episodeInfoContainer}`}>
                    <div>
                        <h1>{episode.episode} : {episode.name}</h1>
                        <p><b>Release Date:</b> {episode.air_date}</p>
                    </div>
                    <h2>Characters:</h2>
                    {characters && <Characters charactersIds={characters}/>}
                </div>
                : alt
            }
        </div>
    );
};

export default Episode;