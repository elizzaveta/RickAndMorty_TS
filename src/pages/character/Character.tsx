import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {characterType} from "../../types/apiResponseTypes";
import CharacterMainInfo from "./CharacterMainInfo";
import CharacterLocations from "./CharacterLocations";
import CharacterEpisodes from "./CharacterEpisodes";
import styles from "../../assets/css/pages/character/Character.module.css"
import {fetchCharacter} from "../../api/characters/fetchCharacter";
import {ErrorType} from "../../types/errorType";

const Character = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState<characterType>();
    const [error, setError] = useState<ErrorType>({isError: false, message: ''});

    if (error.isError) {
        throw new Error(error.message);
    }

    useEffect(() => {
        fetchCharacter(id)
            .then(data => setCharacter(data))
            .catch((e) => setError({isError: true, message: e}));
    }, [id])

    return (
        <div className={styles.wrapper}>
            {character &&
                <div className={`container ${styles.characterWrapper}`}>
                    <img className={styles.image} src={character.image} alt={character.name}/>
                    <div className={styles.mainInfo}>
                        <CharacterMainInfo character={character}/>
                        <CharacterLocations location={character.location} origin={character.origin}/>
                        <CharacterEpisodes episodes={character.episode}/>
                    </div>
                </div>
            }
        </div>

    );
};

export default Character;