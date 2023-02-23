import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState<string>();
    const navigation = useNavigate();
    const handleChange=(event: React.FormEvent<HTMLInputElement>)=>{
        setSearchQuery(event.currentTarget.value)
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter") {
            event.currentTarget.value = ''
            event.currentTarget.blur()
            navigation(`/?name=${searchQuery}`)
        }
    };

    return (
        <input id="searchBar" placeholder="Search..." type="text" onChange={handleChange} onKeyDown={handleKeyDown}/>
    );
};

export default SearchBar;