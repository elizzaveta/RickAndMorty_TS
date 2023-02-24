import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import styles from "../styles/css/components/SearchBar.module.css"
import searchIcon from "../images/search.png"

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState<string>();
    const navigation = useNavigate();
    const handleChange=(event: React.FormEvent<HTMLInputElement>)=>{
        setSearchQuery(event.currentTarget.value)
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter" && searchQuery) {
            event.currentTarget.value = ''
            event.currentTarget.blur()
            navigation(`/?name=${searchQuery}`)
        }
    };

    const handleSubmit = ()=>{
        let search = document.getElementById("searchBar") as HTMLInputElement;
        if(search && searchQuery){
            search.value = '';
            search.blur()
            navigation(`/?name=${searchQuery}`)

        }
    }


    return (
        <div className={styles.wrapper}>
            <input id="searchBar" className={styles.input} placeholder="Search..." type="text" onChange={handleChange} onKeyDown={handleKeyDown}/>
            <img className={styles.searchIcon} src={searchIcon} onClick={handleSubmit}/>
        </div>
    );
};

export default SearchBar;