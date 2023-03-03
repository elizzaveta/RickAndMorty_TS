import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import searchIcon from "../assets/images/search.png"
import styles from "../assets/css/components/SearchBar.module.css"

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState<string>();
    const navigation = useNavigate();
    const handleChange=(event: React.FormEvent<HTMLInputElement>)=>{
        setSearchQuery(event.currentTarget.value)
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter") handleSubmit(event.currentTarget);
    };

    const handleSubmit = (target?:HTMLInputElement):void=>{
        if(!target) target= document.getElementById("searchBar") as HTMLInputElement;
        if(searchQuery){
            target.value = '';
            target.blur()
            navigation(`/?name=${searchQuery}`)
        }
    }
    
    return (
        <div className={styles.wrapper}>
            <input id="searchBar" className={styles.input} placeholder="Search..." type="text" onChange={handleChange} onKeyDown={handleKeyDown}/>
            <img className={styles.searchIcon} src={searchIcon} onClick={()=>{handleSubmit()}} alt="search icon"/>
        </div>
    );
};

export default SearchBar;