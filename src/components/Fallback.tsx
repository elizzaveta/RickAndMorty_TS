import React from 'react';
import rick404 from "../assets/images/404 Rick.png"
import styles from "../assets/css/components/NotFound.module.css"


function Fallback({ error }: {error: Error}){
    return (
        <div className={`container ${styles.wrapper}`}>
            <img src={rick404} alt="404"/>
            <div>
                <h2>{error.message}</h2>
            </div>

        </div>
    );
}

export default Fallback;