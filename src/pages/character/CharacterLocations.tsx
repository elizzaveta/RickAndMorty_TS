import React from 'react';
import styles from "../../styles/css/pages/character/CharacterLocations.module.css";
import {Link} from "react-router-dom";

type propType = {
    location:{
        name:string
        url: string
    },
    origin:{
        name: string
        url: string
    }
}


const CharacterLocations = (props: propType) => {
    const locationId = props.location.url.substring(props.location.url.lastIndexOf('/')+1, props.location.url.length);
    const originId = props.location.url.substring(props.origin.url.lastIndexOf('/')+1, props.origin.url.length);

    return (
        <div className={styles.wrapper}>
            <div>
                <h2 className={styles.title}>Location</h2>
                <Link to={`/locations/${locationId}`} className={`clickableText`}><p>{props.location.name}</p></Link>
            </div>
            <div>
                <h2 className={styles.title}>Origin</h2>
                <Link to={`/locations/${originId}`} className={`clickableText`}><p>{props.origin.name}</p></Link>
            </div>
        </div>
    );
};

export default CharacterLocations;