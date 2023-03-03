import React, {useEffect, useState} from 'react';
import {ThemeClassNames} from "../consts/ThemeClassNames";
import themeIcon from "../assets/images/theme.svg"
import styles from "../assets/css/components/ChangeTheme.module.css"

const ChangeTheme = () => {
    const [theme, setTheme] = useState<string>(getTheme())

    function getTheme():string{
        const localStorageTheme:string|null = window.localStorage.getItem("theme");
        switch (localStorageTheme){
            case ThemeClassNames.light:
            case ThemeClassNames.dark:
                return localStorageTheme;
            default:
                return ThemeClassNames.dark;
        }
    }

    useEffect(()=>{
        let body = document.getElementsByTagName("body")[0];
        if(body) body.classList.add(theme);
        window.localStorage.setItem("theme", theme);
    },[theme])

    const handleThemeChange = ()=>{
        let body = document.getElementsByTagName("body")[0];
        if(body) body.classList.remove(theme);
        theme === ThemeClassNames.dark ? setTheme(ThemeClassNames.light) : setTheme(ThemeClassNames.dark);
    }
    return (
        <img className={styles.image} onClick={handleThemeChange} id="themeIcon" src={themeIcon} alt="theme icon"/>
    );
};

export default ChangeTheme;