import React from 'react';
import styles from "../assets/css/components/Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
                <p>Github: <a href="https://github.com/elizzaveta">elizzaveta</a></p>
                <p>2023</p>
        </footer>
    );
};

export default Footer;