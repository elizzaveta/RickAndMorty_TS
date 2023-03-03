import React from 'react';
import {Link} from "react-router-dom";
import ChangeTheme from "./ChangeTheme";
import Menu from "./Menu";
import styles from "../assets/css/components/Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.leftNav}>
                <Link to="/" className={`clickableText`}>
                    <div>
                        <h3>Rick & Morty</h3>
                        <p>Characters library</p>
                    </div>
                </Link>
                <ChangeTheme/>
            </div>
            <Menu/>
        </header>
    );
};

export default Header;