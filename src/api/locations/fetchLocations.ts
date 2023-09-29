import {apiBaseURL, apiEndpoints} from "../ApiEndpoints";
import {GET} from "../http/GET";

export const getLocations = (query: string) => {
    return GET(apiBaseURL + apiEndpoints.locations + '?' + query);
}
