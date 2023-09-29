import {apiBaseURL, apiEndpoints} from "../ApiEndpoints";
import {GET} from "../http/GET";

export const fetchCharactersByPage = (page: string | null) => {
    return GET(apiBaseURL + apiEndpoints.characters + "/" + page);
}
