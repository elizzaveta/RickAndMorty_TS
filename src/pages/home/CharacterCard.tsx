import React from 'react';
import {characterProps} from "../../consts/propsTypes";
import styles from "../../styles/css/pages/home/CharacterCard.module.css"
import StatusCircle from "../../components/StatusCircle";
import {ColorEnum} from "../../enums/colorEnum";
import {Link} from "react-router-dom";

type propsType = {
    character: characterProps
}

const CharacterCard = (props: propsType) => {
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
        <div className={styles.cardWrapper}>
            <div>
                <img src={character.image} alt={`${character.name} image`}/>
            </div>
            <div>
                <Link to={`/character/${character.id}`} className={`clickableText`}><h2 className={styles.clickable}>{character.name}</h2></Link>
                <div className={styles.status}>
                    <StatusCircle color={renderStatusCircle(character.status)}/>
                    <p>{character.status}</p>
                    <p>-</p>
                    <p>{character.species}</p>
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;