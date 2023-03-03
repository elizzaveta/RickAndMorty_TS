import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getLocation} from "../../api/GET";
import {locationType} from "../../types/apiResponseTypes";
import {NotFoundEnum} from "../../enums/NotFoundEnum";
import {getIdsFromUrls} from "../../utils/functions";
import Loading from "../../components/Loading";
import NotFound from "../../components/NotFound";
import Characters from "../episode/Characters";
import styles from "../../assets/css/pages/location/Location.module.css"

const Location = () => {
    const {id} = useParams()
    const [location, setLocation] = useState<locationType | null>(null);
    const [alt, setAlt] = useState<JSX.Element>(<Loading/>)
    const [residentsIds, setResidentsIds] = useState<number[]>([])

    useEffect(() => {
        (async function () {
            await getLocation(id)
                .then(data => {
                    setLocation(data);
                    setResidentsIds(getIdsFromUrls(data.residents));
                })
                .catch(() => setAlt(<NotFound type={NotFoundEnum.NO_RESULT}/>))
        })()
    }, [id])

    return (
        <div className={styles.wrapper}>
            <div className={`container`}>
                {location
                    ? <>
                        <h1 className={styles.title}>{location.name}</h1>
                        <p><b>Type: </b>{location.type}</p>
                        <p><b>Dimension: </b>{location.dimension}</p>
                        <h2 className={styles.title}>Residents:</h2>
                        {residentsIds.length
                            ?<Characters charactersIds={residentsIds}/>
                            : <p>No residents</p>
                        }
                    </>
                    : alt
                }
            </div>
        </div>
    );
};

export default Location;