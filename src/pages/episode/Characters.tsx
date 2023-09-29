import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {characterType} from "../../types/apiResponseTypes";
import styles from "../../assets/css/pages/episode/Characters.module.css"
import {fetchCharacter} from "../../api/characters/fetchCharacter";

const Characters = (props: { charactersIds: number[] }) => {
    const [characters, setCharacters] = useState<characterType[]>();

    useEffect(() => {
        fetchCharacter(JSON.stringify(props.charactersIds))
            .then(result => setCharacters(result))
            .catch(error=>console.log(error));
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.charactersGrid}>
                {characters && characters?.map((character) => {
                    return (
                        <Link to={`/character/${character.id}`} className={`clickableText ${styles.link}`} key={character.id}>
                            <div key={character.id} className={styles.characterContainer}>
                                <img className={styles.image} src={character.image} alt={character.name}/>
                                <p>{character.name}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};

export default Characters;