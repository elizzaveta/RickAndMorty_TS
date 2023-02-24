import React, {useEffect, useState} from 'react';
import {getCharacter} from "../../api/GET";
import {characterProps} from "../../consts/apiResponseTypes";
import styles from "../../styles/css/pages/episode/Characters.module.css"
import {Link} from "react-router-dom";

const Characters = (props: { charactersIds: number[] }) => {
    const [characters, setCharacters] = useState<characterProps[]>();

    useEffect(() => {
        (async function () {
            await getCharacter(JSON.stringify(props.charactersIds))
                .then(response => response.json())
                .then(result => setCharacters(result))
                .catch(error=>console.log(error));

        })();
    }, [])

    return (
        <div className={styles.wrapper}>
            <h2>Characters</h2>
            <div className={styles.charactersGrid}>
                {characters && characters?.map((character) => {
                    return (
                        <Link to={`/character/${character.id}`} className={`clickableText ${styles.link}`}>
                            <div key={character.id} className={styles.characterContainer}>
                                <img className={styles.image} src={character.image}/>
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