import React from 'react';
import styles from "../../styles/css/pages/character/CharacterLocations.module.css";

const CharacterLocations = (props: {locationName: string, originName: string}) => {
    return (
        <div className={styles.wrapper}>
            <div>
                <h2 className={styles.title}>Location</h2>
                <p>{props.locationName}</p>
            </div>
            <div>
                <h2 className={styles.title}>Origin</h2>
                <p>{props.originName}</p>
            </div>
        </div>
    );
};

export default CharacterLocations;