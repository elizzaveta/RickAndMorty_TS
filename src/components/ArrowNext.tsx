import React from 'react';
import nextIcon from "../images/nextIcon.png"
import styles from "../css/components/ArrowNext.module.css"

const ArrowNext = (props:{onClick?:()=>void}) => {
    return (
        <div onClick={props.onClick}>
            <img className={styles.icon} src={nextIcon}/>
        </div>
    );
};

export default ArrowNext;