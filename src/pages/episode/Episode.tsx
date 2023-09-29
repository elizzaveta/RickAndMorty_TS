import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {episodeType} from "../../types/apiResponseTypes";
import {getIdsFromUrls} from "../../utils/functions";
import Characters from "./Characters";
import styles from "../../assets/css/pages/episode/Episode.module.css"
import {fetchEpisodes} from "../../api/episodes/fetchEpisodes";
import {ErrorType} from "../../types/errorType";

const Episode = () => {
    const {id} = useParams();
    const [episode, setEpisode] = useState<episodeType>();
    const [characters, setCharacters] = useState<number[]>()
    const [error, setError] = useState<ErrorType>({isError: false, message:''})

    if(error.isError) throw new Error(error.message);

    useEffect(() => {
        fetchEpisodes(String(id))
            .then(data=>{
                setEpisode(data)
                setCharacters(getIdsFromUrls(data.characters))
            })
            .catch((e) => setError({isError: true, message: e}));
    }, [id])



    return (
        <div className={styles.wrapper}>
            {episode &&
                <div className={`container ${styles.episodeInfoContainer}`}>
                    <div>
                        <h1>{episode.episode} : {episode.name}</h1>
                        <p><b>Release Date:</b> {episode.air_date}</p>
                    </div>
                    <h2>Characters:</h2>
                    {characters && <Characters charactersIds={characters}/>}
                </div>
            }
        </div>
    );
};

export default Episode;