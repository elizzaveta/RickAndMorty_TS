import React, {useEffect, useState} from 'react';
import {episodesProps, locationsProps} from "../../consts/apiResponseTypes";
import {Link, useSearchParams} from "react-router-dom";
import {getEpisodesCatalog, getLocation, getLocationsCatalog} from "../../api/GET";
import styles from "../../styles/css/pages/episodes/Episodes.module.css";
import Pagination from "../../components/pagination/Pagination";
import Loading from "../../components/Loading";
import NotFound from "../../components/NotFound";
import {NotFoundEnum} from "../../enums/NotFoundEnum";

const Episodes = () => {
    const [locations, setLocations] = useState<locationsProps>();
    let [searchParams] = useSearchParams();
    const [alt, setAlt] = useState<JSX.Element>(<Loading/>)

    useEffect(() => {
        (async function fetchCatalog() {
            await getLocationsCatalog(searchParams.toString())
                .then(data => {
                    setLocations({
                        info: data.info,
                        locations: data.results
                    })
                })
                .catch(() => setAlt(<NotFound type={NotFoundEnum.NO_RESULT}/>));
        })();

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