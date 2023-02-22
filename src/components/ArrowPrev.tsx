import React from 'react';
import prevIcon from "../images/prevIcon.png"
import styles from "../css/components/ArrowPrev.module.css"

const ArrowPrev = (props:{onClick?:()=>void}) => {
    return (
        <div onClick={props.onClick}>
            <img className={styles.icon} src={prevIcon}/>
        </div>
    );
};

export default ArrowPrev;