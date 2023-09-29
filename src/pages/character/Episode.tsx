import React from 'react';
import {Link} from "react-router-dom";
import {episodeType} from "../../types/apiResponseTypes";
import styles from "../../assets/css/pages/character/Episodes.module.css"

const Episode = (props: {episode: episodeType}) => {
    const {episode} = props;

    return (
        <Link className={`clickableText ${styles.link}`} to={`/episode/${episode.id}`}><p>{episode.episode}: {episode.name}</p></Link>

    );
};

export default Episode;