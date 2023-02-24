import React from 'react';
import rick404 from "../images/404 Rick.png"
import {NotFoundEnum} from "../enums/NotFoundEnum"
import styles from "../styles/css/components/NotFound.module.css"


const NotFound = (props: { type?:string}) => {
    return (
        <div className={`container ${styles.wrapper}`}>
            <img src={rick404}/>
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