import React from 'react';
import {Link} from "react-router-dom";
import {episodeType} from "../../types/apiResponseTypes";
import styles from "../../assets/css/pages/character/Episodes.module.css"

const Episode = (props: { episode: episodeType }) => {
    return (
        <Link to={`/episode/${props.episode.id}`}  className={`clickableText ${styles.link}`} >
            <p>{props.episode.episode}: {props.episode.name}</p>
        </Link>
    );
};

export default Episode;