import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {characterType} from "../../types/apiResponseTypes";
import {NotFoundEnum} from "../../enums/NotFoundEnum";
import NotFound from "../../components/NotFound";
import Loading from "../../components/Loading";
import CharacterMainInfo from "./CharacterMainInfo";
import CharacterLocations from "./CharacterLocations";
import CharacterEpisodes from "./CharacterEpisodes";
import styles from "../../assets/css/pages/character/Character.module.css"
import {fetchCharacter} from "../../api/characters/fetchCharacter";

const Character = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState<characterType>();
    const [alt, setAlt] = useState<JSX.Element>(<Loading/>)

    useEffect(() => {
        fetchCharacter(id)
            .then(data => setCharacter(data))
            .catch(() => setAlt(<NotFound type={NotFoundEnum.NO_RESULT}/>));
    }, [id])


    return (
        <div className={styles.wrapper}>
            {character?.name
                ? <div className={`container ${styles.characterWrapper}`}>
                    <img className={styles.image} src={character.image} alt={character.name}/>
                    <div className={styles.mainInfo}>
                        <CharacterMainInfo character={character}/>
                        <CharacterLocations location={character.location} origin={character.origin}/>
                        <CharacterEpisodes episodes={character.episode}/>
                    </div>
                </div>
                : alt
            }
        </div>

    );
};

export default Character;