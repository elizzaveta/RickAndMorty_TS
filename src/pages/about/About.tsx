import React from 'react';
import styles from "../../styles/css/pages/about/About.module.css"

const About = () => {
    return (
        <div className={`container ${styles.wrapper}`}>
            <h1>About this site</h1>
            <h2>Idea</h2>
            <p>Library of the television show "Rick and Morty" characters.</p>
            <h2>Features</h2>
            <ul>
                <li>Characters Catalog</li>
                <li>Pagination</li>
                <li>Character page</li>
                <li>Search Bar</li>
            </ul>
            <h2>Technologies</h2>
            <p>Website is written with <b>React.js</b> and <b>Typescript</b> and deployed on <b>Vercel</b>.</p>
            <h2>API</h2>
            <p>Data is taken from public API - <a href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer">The Rick and Morty API</a></p>
            <h2>Source Code</h2>
            <p>Source code of this page is located on <a href="https://github.com/elizzaveta" target="_blank" rel="noreferrer">GitHub</a></p>
        </div>
    );
};

export default About;