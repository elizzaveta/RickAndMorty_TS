import React, {useEffect, useState} from 'react';
import {characterProps} from "../../consts/propsTypes";
import {useParams} from "react-router-dom";
import {getCharacter} from "../../api/GET";
import styles from "../../styles/css/pages/character/Character.module.css"
import CharacterEpisodes from "./CharacterEpisodes";
import StatusCircle from "../../components/StatusCircle";
import {ColorEnum} from "../../enums/colorEnum";

const Character = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState<characterProps>();
    useEffect(() => {
        (async function () {
            const response = await getCharacter(id);
            const data = await response.json();
            setCharacter(await data);
            console.log(await data)
        })();
    }, [id])
    const renderStatusCircle = (status: string) => {
        switch (status) {
            case "Alive":
                return ColorEnum.GREEN;
            case "Dead":
                return ColorEnum.RED;
            default:
                return ColorEnum.GRAY;
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={`container ${styles.characterInfo}`}>
                {character &&
                    <div className={styles.infoWrapper}>
                        <img className={styles.image} src={character.image}/>
                        <div className={styles.mainInfo}>
                            <h1>{character.name}</h1>
                            <div>
                                <div className={styles.rowDisplay}><b>Status:</b> <StatusCircle color={renderStatusCircle(character.status)}/> {character.status}</div>
                                <p><b>Species:</b> {character.species}</p>
                                <p><b>Gender:</b> {character.gender}</p>
                            </div>
                            {character.type && <p>Type: {character.type}</p>}
                            <div className={styles.location}>
                                <div>
                                    <h2>Location</h2>
                                    <p>{character.location.name}</p>
                                </div>
                                <div>
                                    <h2>Origin</h2>
                                    <p>{character.origin.name}</p>
                                </div>
                            </div>
                            <div>
                                <h2>Episodes</h2>
                                <CharacterEpisodes episodes={character.episode}/>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Character;