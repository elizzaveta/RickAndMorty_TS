import React from 'react';
import styles from "../styles/css/components/Header.module.css"
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/">
                <div>
                    <h3>Rick & Morty</h3>
                    <p>Characters library</p>
                </div>
            </Link>
            <div className={styles.rightItems}>
                <SearchBar/>
                <Link to="/about"><h4>About</h4></Link>
            </div>
        </header>
    );
};

export default Header;