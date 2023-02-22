import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import ArrowPrev from "./ArrowPrev";
import ArrowNext from "./ArrowNext";
import styles from "../css/components/Pagination.module.css"
import PaginationPagesDisplay from "./PaginationPagesDisplay";

type propsType = {
    pages: number | undefined
}
const Pagination = (props: propsType) => {
    const {pages} = props;
    const {page} = useParams();
    const navigation = useNavigate();
    let pageInt: number;

    if (!page) {
        pageInt = 1;
    } else {
        pageInt = parseInt(page as string);
    }


    const handlePagination = (type: string) => {
        if (type === "prev") {
            if (pageInt > 1) {
                navigation(`/page/${pageInt - 1}`)
                document.getElementById("catalogTog")?.scrollIntoView({behavior: "smooth"})
            }
        } else {
            if (pages && pageInt < pages) {
                navigation(`/page/${pageInt + 1}`)
                document.getElementById("catalogTog")?.scrollIntoView({behavior: "smooth"})
            }
        }



    }
    return (
        <div className={styles.wrapper}>
            <ArrowPrev onClick={() => handlePagination("prev")}/>
            <PaginationPagesDisplay page={pageInt} total={pages}/>
            <ArrowNext onClick={() => handlePagination("next")}/>
        </div>
    );
};

export default Pagination;