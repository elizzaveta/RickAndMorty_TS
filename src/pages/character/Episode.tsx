import React, {useEffect, useState} from 'react';
import {getEpisode} from "../../api/GET";

type episodeType = {
    id:number
    name: string
    air_date: string
    episode: string
    characters: string[]
    url: string
    created: string

}

const Episode = (props: {episode: string}) => {
    const {episode} = props;
    const [episodeInfo, setEpisodeInfo] = useState<episodeType>();

    useEffect(()=>{
        (async function (){
            const response = await getEpisode(episode);
            const data = await response.json();
            setEpisodeInfo(await data);
        })()
    }, [episode])
    return (
        <>
            {episodeInfo &&
                <div>
                    <p>{episodeInfo.episode}: {episodeInfo.name}</p>
                </div>
            }
        </>
    );
};

export default Episode;