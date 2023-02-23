import React, {useEffect, useState} from 'react';
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import ArrowPrev from "./ArrowPrev";
import ArrowNext from "./ArrowNext";
import styles from "../css/components/Pagination.module.css"
import PaginationPagesDisplay from "./PaginationPagesDisplay";

type propsType = {
    pages: number | undefined
}
const Pagination = (props: propsType) => {
    const {pages} = props;
    let [searchParams, setSearchParams] = useSearchParams();
    const page = parseInt(searchParams.get("page")||"1");
    const navigation = useNavigate();

    const handlePagination = (type: string) => {
        let targetPage:number = page;
        if (type === "prev") {
            if (page > 1) {
                targetPage--;
            }
        } else {
            if (pages && page < pages) {
                targetPage++;
            }
        }
        searchParams.set("page", String(targetPage) )
        navigation(`/?${searchParams}`)
        document.getElementById("catalogTog")?.scrollIntoView({behavior: "smooth"})
    }
    return (
        <div className={styles.wrapper}>
            <ArrowPrev onClick={() => handlePagination("prev")}/>
            <PaginationPagesDisplay page={page} total={pages}/>
            <ArrowNext onClick={() => handlePagination("next")}/>
        </div>
    );
};

export default Pagination;