import React, {useEffect, useState} from 'react';
import {characterProps} from "../../consts/propsTypes";
import {useParams} from "react-router-dom";
import {getCharacter} from "../../api/GET";
import styles from "../../css/pages/character/Character.module.css"
import CharacterEpisodes from "./CharacterEpisodes";

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

    return (
        <div className={styles.wrapper}>
            <div className={`container ${styles.characterInfo}`}>
                {character &&
                    <div className={styles.infoWrapper}>
                        <img className={styles.image} src={character.image}/>
                        <div className={styles.mainInfo}>
                            <h1>{character.name}</h1>
                            <div>
                                <p><b>Status:</b> {character.status}</p>
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