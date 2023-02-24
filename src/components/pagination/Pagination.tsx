import React from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import styles from "../../styles/css/components/Pagination.module.css"
import PaginationPagesDisplay from "./PaginationPagesDisplay";
import Arrow from "../Arrow";
import {ArrowIcon} from "../../consts/ArrowIcons";

const Pagination = (props: {pages: number | undefined}) => {
    const {pages} = props;
    let [searchParams, setSearchParams] = useSearchParams();
    const page = parseInt(searchParams.get("page") || "1");
    const navigate = useNavigate();

    const handlePrevPage = () => {
        if (page > 1) handlePageNavigation(String(page - 1));
    }
    const handleNextPage = () => {
        if (pages && page < pages) handlePageNavigation(String(page + 1));
    }
    const handlePageNavigation = (targetPage: string) => {
        searchParams.set("page", targetPage)
        navigate({
            pathname: window.location.pathname,
            search: searchParams.toString()
        });
        document.getElementById("topView")?.scrollIntoView({behavior: "smooth"})
    }

    return (
        <div className={styles.wrapper}>
            <Arrow onClick={() => handlePrevPage()} icon={ArrowIcon.left}/>
            <PaginationPagesDisplay page={page} total={pages}/>
            <Arrow onClick={() => handleNextPage()} icon={ArrowIcon.right}/>
        </div>
    );
};

export default Pagination;