import {apiBaseURL, apiEndpoints} from "../ApiEndpoints";
import {GET} from "../http/GET";

export const fetchCharacter = (id: string | undefined) => {

    return GET(apiBaseURL + apiEndpoints.characters + "/" + id)
}