import {apiBaseURL, apiEndpoints} from "../consts/apiURLs";
import axios from "axios";

export const getCatalog = (page: string | undefined) => {
    // return axios.get(apiBaseURL + apiEndpoints.characters + "?page=" + page);

    return fetch(apiBaseURL + apiEndpoints.characters + "?page=" + page);
}
export const getCharacter = (id: string | undefined) => {

    return fetch(apiBaseURL + apiEndpoints.characters + "/" + id);
}
export const getEpisode = (path: string) => {
    return fetch(path);
}