import {apiBaseURL, apiEndpoints} from "../consts/apiURLs";

const GET = (url:string)=>{
    return fetch(url)
        .then(response=> {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong');
        });
}


export const getCatalog = (page: string | null) => {
    return GET(apiBaseURL + apiEndpoints.characters + "/" + page);
}
export const getCharacter = (id: string | undefined) => {

    return GET(apiBaseURL + apiEndpoints.characters + "/" + id)
}
export const getEpisodes = (query: string) => {
    return GET(apiBaseURL + apiEndpoints.episodes + "/" + query);
}
export const getEpisodesCatalog = (query: string) => {
    return GET(apiBaseURL + apiEndpoints.episodes + '?' + query);
}
export const getLocation = (id: string|undefined) => {
    return GET(apiBaseURL + apiEndpoints.locations + '/' + id);
}
export const getLocationsCatalog = (query: string) => {
    return GET(apiBaseURL + apiEndpoints.locations + '?' + query);
}
