import React from 'react';
import {episodeType} from "../../consts/apiResponseTypes";
import {Link} from "react-router-dom";
import styles from "../../styles/css/pages/character/Episodes.module.css"



const Episode = (props: {episode: episodeType}) => {
    const {episode} = props;

    return (
        <Link className={`clickableText ${styles.link}`} to={`/episode/${episode.id}`}><p>{episode.episode}: {episode.name}</p></Link>

    );
};

export default Episode;