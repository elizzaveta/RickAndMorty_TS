import React, {useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";
import menuIcon from "../assets/images/menu.svg"
import SearchBar from "./SearchBar";
import styles from "../assets/css/components/Menu.module.css";

const Menu = () => {
    const [showIcon, setShowIcon] = useState<boolean>(window.innerWidth < 900);
    const [toggleMenu, setToggleMenu] = useState<boolean>(true);
    const [location] = useSearchParams()

    window.addEventListener("resize", () => {
        if (window.innerWidth < 900) {
            setShowIcon(true);
        }
        else {
            setShowIcon(false);
            setToggleMenu(true)
        }
    })

    useEffect(()=>{
        setToggleMenu(true)
    }, [location])

    const handleMenuClick=()=>{
        setToggleMenu(!toggleMenu);
    }

    return (
        <>
            {showIcon
                ? <div className={styles.iconWrapper}><img className={styles.icon} src={menuIcon} alt="menuIcon" onClick={handleMenuClick}/></div>
                :<div className={styles.flexItems}>
                    <Link to="/episodes" className={`clickableText`}><h4>Episodes</h4></Link>
                    <Link to="/locations" className={`clickableText`}><h4>Locations</h4></Link>
                    <Link to="/quiz" className={`clickableText`}><h4>Quiz</h4></Link>
                    <Link to="/about" className={`clickableText`}><h4>About</h4></Link>
                    <SearchBar/>
                </div>
            }
            <div id="menu" className={`container ${styles.menu} ${toggleMenu? styles.toggle:''}`}>
                <Link to="/episodes" className={`clickableText`} onClick={handleMenuClick}><h4>Episodes</h4></Link>
                <Link to="/locations" className={`clickableText`} onClick={handleMenuClick}><h4>Locations</h4></Link>
                <Link to="/quiz" className={`clickableText`} onClick={handleMenuClick}><h4>Quiz</h4></Link>
                <Link to="/about" className={`clickableText`} onClick={handleMenuClick}><h4>About</h4></Link>
                <SearchBar/>
            </div>
        </>);
};

export default Menu;