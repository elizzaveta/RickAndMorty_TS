import React, {useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";
import {locationCatalogType} from "../../types/apiResponseTypes";
import Pagination from "../../components/pagination/Pagination";
import styles from "../../assets/css/pages/episodes/Episodes.module.css";
import {fetchLocations} from "../../api/locations/fetchLocations";
import {ErrorType} from "../../types/errorType";

const Episodes = () => {
    const [locations, setLocations] = useState<locationCatalogType>();
    const [searchParams] = useSearchParams();
    const [error, setError] = useState<ErrorType>({isError: false});

    if (error.isError) throw new Error(error.message);

    useEffect(() => {
        fetchLocations(searchParams.toString())
            .then(data => {
                setLocations({
                    info: data.info,
                    locations: data.results
                })
            })
            .catch((e) => setError({isError: true, message: e}));
    }, [searchParams])
    return (
        <div className={styles.wrapper}>
            <div id="topView"></div>
            <div className={`container`}>
                <h1 className={`orangeText`}>Locations</h1>
                {locations &&
                    locations.locations.map((location) => {
                        return (
                            <h2>
                                <Link to={`/locations/${location.id}`} className={`clickableText`}>
                                    {location.name}
                                </Link>
                            </h2>
                        )
                    })
                }
            </div>

            <Pagination pages={locations?.info.pages}/>
        </div>
    )
};

export default Episodes;