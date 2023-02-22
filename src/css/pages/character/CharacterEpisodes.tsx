import React, {useEffect} from 'react';
import Episode from "./Episode";

const CharacterEpisodes = (props:{episodes:string[]}) => {
    const {episodes} = props;

    return (
        <div>
            {episodes.map((episode)=>{
                return(
                    <Episode episode={episode}/>
                )
            })}
        </div>
    );
};

export default CharacterEpisodes;