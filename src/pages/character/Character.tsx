import React, {useEffect, useState} from 'react';
import {characterProps} from "../../consts/apiResponseTypes";
import {useParams} from "react-router-dom";
import {getCharacter} from "../../api/GET";
import styles from "../../styles/css/pages/character/Character.module.css"
import CharacterEpisodes from "./CharacterEpisodes";
import StatusCircle from "../../components/StatusCircle";
import {ColorEnum} from "../../enums/colorEnum";
import NotFound from "../../components/NotFound";
import {NotFoundEnum} from "../../enums/NotFoundEnum";

const Character = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState<characterProps>();
    useEffect(() => {
        (async function () {
            await getCharacter(id)
                .then(response=>response.json())
                .then(data => setCharacter(data))
                .catch(error=>console.log(error));

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
        <>
            {character?.name
            ?<div className={styles.wrapper}>
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
            :<NotFound type={NotFoundEnum.NO_RESULT}/>
            }
        </>

    );
};

export default Character;