import {apiBaseURL, apiEndpoints} from "../consts/apiURLs";

export const getCatalog = (page: string | null) => {
    return fetch(apiBaseURL + apiEndpoints.characters + "/" + page);
}
export const getCharacter = (id: string | undefined) => {

    return fetch(apiBaseURL + apiEndpoints.characters + "/" + id);
}
export const getEpisodes = (query: string) => {
    return fetch(apiBaseURL + apiEndpoints.episodes + "/" + query);
}
export const getEpisodesCatalog = (query: string) => {
    return fetch(apiBaseURL + apiEndpoints.episodes + '?' + query);
}