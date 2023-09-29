import {apiBaseURL, apiEndpoints} from "../ApiEndpoints";
import {GET} from "../http/GET";

export const fetchEpisodes = (query: string) => {
    return GET(apiBaseURL + apiEndpoints.episodes + "/" + query);
}