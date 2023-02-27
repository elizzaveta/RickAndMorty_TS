import React from 'react';
import styles from "../styles/css/components/Header.module.css"
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";
import ChangeTheme from "./ChangeTheme";
import Menu from "./Menu";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.flexItems}>
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