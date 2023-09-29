import {apiBaseURL, apiEndpoints} from "../ApiEndpoints";
import {GET} from "../http/GET";

export const fetchLocation = (id: string|undefined) => {
    return GET(apiBaseURL + apiEndpoints.locations + '/' + id);
}