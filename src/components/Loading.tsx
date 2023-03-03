import React from 'react';
import loaderGif from "../assets/images/loading-portal.gif"
import styles from "../assets/css/components/Loading.module.css"

const Loading = () => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.gif} src={loaderGif} alt="loading"/>
        </div>
    );
};

export default Loading;