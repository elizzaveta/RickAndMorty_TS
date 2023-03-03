import React from 'react';
import styles from "../assets/css/components/Arrow.module.css";

const Arrow = (props:{icon:string, onClick:()=>void}) => {
    return (
        <div onClick={props.onClick}>
            <img className={styles.icon} src={props.icon} alt="arrow"/>
        </div>
    );
};

export default Arrow;