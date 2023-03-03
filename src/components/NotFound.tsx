import React from 'react';
import {NotFoundEnum} from "../enums/NotFoundEnum"
import rick404 from "../assets/images/404 Rick.png"
import styles from "../assets/css/components/NotFound.module.css"


const NotFound = (props: { type?:string}) => {
    return (
        <div className={`container ${styles.wrapper}`}>
            <img src={rick404} alt="404"/>
            <div>
                <h1>Not Found</h1>
                {props.type
                    ? <p>{props.type}</p>
                    : <p>{NotFoundEnum.ERROR_404}</p>
                }
            </div>

        </div>
    );
};

export default NotFound;