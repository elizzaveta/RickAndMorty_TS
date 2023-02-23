import React, {useEffect, useState} from 'react';
import Episode from "./Episode";
import {getEpisodes} from "../../api/GET";
import {episodeType} from "../../consts/apiResponseTypes";
import {getIdsFromUrls} from "../../functions";

const CharacterEpisodes = (props:{episodes:string[]}) => {
    const {episodes} = props;
    const [episodesInfo, setEpisodesInfo] = useState<episodeType[]>()
    let episodesIds:number[] = getIdsFromUrls(episodes);

    useEffect(() => {
        (async function () {
            const response = await getEpisodes(JSON.stringify(episodesIds));
            const data = await response.json();
            setEpisodesInfo(await data);
        })();
    }, [])

    return (
        <div>
            {episodesInfo && episodesInfo.map((episode)=>{
                return(
                    <Episode episode={episode} key={episode.id}/>
                )
            })}
        </div>
    );
};

export default CharacterEpisodes;