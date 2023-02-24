import React from 'react';
import styles from "../styles/css/components/ArrowNext.module.css";

const Arrow = (props:{icon:string, onClick:()=>void}) => {
    return (
        <div onClick={props.onClick}>
            <img className={styles.icon} src={props.icon}/>
        </div>
    );
};

export default Arrow;