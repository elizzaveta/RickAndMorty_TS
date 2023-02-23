import React from 'react';
import styles from "../../styles/css/pages/home/Hero.module.css"

const Hero = () => {
    return (
        <div>
            <div className={`container ${styles.bgImage}`}>
                <h1>Welcome to The Rick and Morty Characters Library!</h1>
                <h3>You can find here "Rick and Morty" characters, images, locations and episodes.</h3>
            </div>
        </div>
    );
};

export default Hero;