import React, {useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";
import {locationCatalogType} from "../../types/apiResponseTypes";
import {NotFoundEnum} from "../../enums/NotFoundEnum";
import Pagination from "../../components/pagination/Pagination";
import Loading from "../../components/Loading";
import NotFound from "../../components/NotFound";
import styles from "../../assets/css/pages/episodes/Episodes.module.css";
import {fetchLocation} from "../../api/locations/fetchLocation";

const Episodes = () => {
    const [locations, setLocations] = useState<locationCatalogType>();
    let [searchParams] = useSearchParams();
    const [alt, setAlt] = useState<JSX.Element>(<Loading/>)

    useEffect(() => {
        fetchLocation(searchParams.toString())
            .then(data => {
                setLocations({
                    info: data.info,
                    locations: data.results
                })
            })
            .catch(() => setAlt(<NotFound type={NotFoundEnum.NO_RESULT}/>));
    }, [searchParams])
    return (
        <div className={styles.wrapper}>
            <div id="topView"></div>
            <div className={`container`}>
                <h1 className={`orangeText`}>Locations</h1>
                {locations
                    ? locations.locations.map((location) => {
                        return (
                            <h2>
                                <Link to={`/locations/${location.id}`} className={`clickableText`}>
                                    {location.name}
                                </Link>
                            </h2>
                        )
                    })
                    : alt}
            </div>

            <Pagination pages={locations?.info.pages}/>
        </div>
    )
};

export default Episodes;