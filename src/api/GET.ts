import {apiBaseURL, apiEndpoints} from "../consts/apiURLs";
import axios from "axios";

export const getCatalog = (page: string | null) => {
    return fetch(apiBaseURL + apiEndpoints.characters + "/" + page);
}
export const getCharacter = (id: string | undefined) => {

    return fetch(apiBaseURL + apiEndpoints.characters + "/" + id);
}
export const getEpisode = (path: string) => {
    return fetch(path);
}