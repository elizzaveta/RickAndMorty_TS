import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {locationType} from "../../types/apiResponseTypes";
import {getIdsFromUrls} from "../../utils/functions";
import Characters from "../episode/Characters";
import styles from "../../assets/css/pages/location/Location.module.css"
import {fetchLocations} from "../../api/locations/fetchLocations";
import {ErrorType} from "../../types/errorType";

const Location = () => {
    const {id} = useParams()
    const [location, setLocation] = useState<locationType | null>(null);
    const [residentsIds, setResidentsIds] = useState<number[]>([])
    const [error, setError] = useState<ErrorType>({isError: false});

    if(error.isError) throw new Error(error.message);

    useEffect(() => {
        fetchLocations(id)
            .then(data => {
                setLocation(data);
                setResidentsIds(getIdsFromUrls(data.residents));
            })
            .catch((e) => setError({isError: true, message: e}));
    }, [id])

    return (
        <div className={styles.wrapper}>
            <div className={`container`}>
                {location &&
                    <>
                        <h1 className={styles.title}>{location.name}</h1>
                        <p><b>Type: </b>{location.type}</p>
                        <p><b>Dimension: </b>{location.dimension}</p>
                        <h2 className={styles.title}>Residents:</h2>
                        {residentsIds.length
                            ?<Characters charactersIds={residentsIds}/>
                            : <p>No residents</p>
                        }
                    </>
                }
            </div>
        </div>
    );
};

export default Location;