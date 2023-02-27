import React from 'react';
import styles from "../../styles/css/pages/character/CharacterMainInfo.module.css";
import StatusCircle from "../../components/StatusCircle";
import {ColorEnum} from "../../enums/colorEnum";
import {characterProps} from "../../consts/apiResponseTypes";

const CharacterMainInfo = (props:{character: characterProps}) => {
    const {character} = props;
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
        <div>
            <h1 className={styles.title}>{character.name}</h1>
            <div>
                <div className={styles.rowDisplay}>
                    <b>Status:</b>
                    <StatusCircle color={renderStatusCircle(character.status)}/>
                    {character.status}
                </div>
                <p><b>Species:</b> {character.species}</p>
                <p><b>Gender:</b> {character.gender}</p>
            </div>
            {character.type && <p>Type: {character.type}</p>}
        </div>
    );
};

export default CharacterMainInfo;