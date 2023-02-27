import React, {useEffect, useState} from 'react';
import {characterProps} from "../../consts/apiResponseTypes";
import {useParams} from "react-router-dom";
import {getCharacter} from "../../api/GET";
import styles from "../../styles/css/pages/character/Character.module.css"
import CharacterEpisodes from "./CharacterEpisodes";
import NotFound from "../../components/NotFound";
import {NotFoundEnum} from "../../enums/NotFoundEnum";
import Loading from "../../components/Loading";
import CharacterMainInfo from "./CharacterMainInfo";
import CharacterLocations from "./CharacterLocations";

const Character = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState<characterProps>();
    const [alt, setAlt] = useState<JSX.Element>(<Loading/>)

    useEffect(() => {
        (async function () {
            await getCharacter(id)
                .then(data => setCharacter(data))
                .catch(() => setAlt(<NotFound type={NotFoundEnum.NO_RESULT}/>));
        })();
    }, [id])


    return (
        <div className={styles.wrapper}>
            {character?.name
                ? <div className={`container ${styles.characterWrapper}`}>
                    <img className={styles.image} src={character.image} alt={character.name}/>
                    <div className={styles.mainInfo}>
                        <CharacterMainInfo character={character}/>
                        <CharacterLocations location={character.location}
                                            origin={character.origin}/>
                        <CharacterEpisodes episodes={character.episode}/>
                    </div>
                </div>
                : alt
            }
        </div>

    );
};

export default Character;