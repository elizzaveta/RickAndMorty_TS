import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getEpisodes} from "../../api/GET";
import {episodeType} from "../../consts/apiResponseTypes";
import {getIdsFromUrls} from "../../functions";
import Characters from "./Characters";
import styles from "../../styles/css/pages/episode/Episode.module.css"

const Episode = () => {
    const {id} = useParams();
    const [episode, setEpisode] = useState<episodeType>();
    const [characters, setCharacters] = useState<number[]>()
    useEffect(() => {
        (async function () {
            const response = await getEpisodes(String(id));
            const data = await response.json();
            setEpisode(await data);
            setCharacters(getIdsFromUrls(await data.characters));
        })();
    }, [id])

    return (
        <div className={styles.wrapper}>
            {episode &&
                <div className={`container ${styles.episodeInfoContainer}`}>
                    <div>
                        <h1>{episode.episode} : {episode.name}</h1>
                        <p><b>Release Date:</b> {episode.air_date}</p>
                    </div>
                    {characters && <Characters charactersIds={characters}/>}
                </div>
            }
        </div>
    );
};

export default Episode;