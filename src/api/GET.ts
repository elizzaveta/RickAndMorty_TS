import {apiBaseURL, apiEndpoints} from "./ApiEndpoints";

const GET = (url:string)=>{
    return fetch(url)
        .then(response=> {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong');
        });
}

//get characters catalog
export const getCatalog = (page: string | null) => {
    return GET(apiBaseURL + apiEndpoints.characters + "/" + page);
}

//get episodes catalog
export const getEpisodes = (query: string) => {
    return GET(apiBaseURL + apiEndpoints.episodes + '?' + query);
}

//get locations catalog
export const getLocations = (query: string) => {
    return GET(apiBaseURL + apiEndpoints.locations + '?' + query);
}

//get characters by ids
export const getCharacter = (id: string | undefined) => {

    return GET(apiBaseURL + apiEndpoints.characters + "/" + id)
}

//get location by id
export const getLocation = (id: string|undefined) => {
    return GET(apiBaseURL + apiEndpoints.locations + '/' + id);
}

//get episodes by ids
export const getEpisode = (query: string) => {
    return GET(apiBaseURL + apiEndpoints.episodes + "/" + query);
}
