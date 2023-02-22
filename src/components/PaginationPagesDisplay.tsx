import React, {useEffect, useState} from 'react';
import styles from "../css/components/Pagination.module.css"
import {useNavigate} from "react-router-dom";

const PaginationPagesDisplay = (props: { page: number, total: number | undefined }) => {
    const {page, total} = props;
    let pagination;
    if (total && total < 12) {
        pagination = <DisplayPlain page={page} total={total}/>
    } else if (total) {
        if (page < 8) {
            pagination = <DisplayLeft page={page} total={total}/>
        } else if (page > 34) {
            pagination = <DisplayRight page={page} total={total}/>
        } else {
            pagination = <DisplayCenter page={page} total={total}/>
        }
    }

    return (
        <div className={styles.pages}>
            {pagination}
        </div>
    );
};
const DisplayPlain = (props: { page: number, total: number }) => {
    let array = new Array(props.total);
    for (let i = 1; i <= props.total; i++) {
        array.push(i);
    }
    return (
        <DisplayPages currentPage={props.page} left={array}/>
    )
}
const DisplayLeft = (props: { page: number, total: number }) => {
    const arrayLeft = [1, 2, 3, 4, 5, 6, 7, 8];
    const arrayRight = [props.total - 1, props.total];

    return (
        <DisplayPages currentPage={props.page} left={arrayLeft} right={arrayRight}/>
    )
}
const DisplayRight = (props: { page: number, total: number }) => {
    const arrayLeft = [1, 2];
    const arrayRight = new Array(8);
    for (let i = props.total; i >= props.total - 8; i--) {
        arrayRight.unshift(i);
    }

    return (
        <DisplayPages currentPage={props.page} left={arrayLeft} right={arrayRight}/>
    )
}
const DisplayCenter = (props: { page: number, total: number }) => {
    const {page} = props;
    const arrayLeft = [1, 2];
    const arrayRight = [props.total - 1, props.total];
    const arrayCenter = [page - 2, page - 1, page, page + 1, page + 2]
    return (
        <DisplayPages currentPage={props.page} left={arrayLeft} center={arrayCenter} right={arrayRight}/>
    )
}

const DisplayPages = (props: { currentPage: number, left: number[], right?: number[], center?: number[] }) => {
    let navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(props.currentPage)

    useEffect(() => {
        const prevPageElement: HTMLElement | null = document.getElementById('page'+currentPage);
        const currentPageElement: HTMLElement | null = document.getElementById('page'+props.currentPage);
        if (currentPageElement && prevPageElement) {
            prevPageElement.className = "";
            currentPageElement.className = styles.currentPage
        }
        setCurrentPage(props.currentPage)
    },[currentPage, props.currentPage])

    const handleNavigation = (page: number) =>{
        navigate(`/page/${page}`);
        document.getElementById("catalogTog")?.scrollIntoView({behavior: "smooth"})
    }
    return (
        <>
            {props.left.map((page) => {
                return (
                    <p key={page} id={'page'+page} onClick={() => {
                        handleNavigation(page)
                    }}>{page}</p>
                )
            })}
            {props.center && <p>...</p>}
            {props.center && props.center.map((page) => {
                return (
                    <p key={page} id={'page'+page} onClick={() => {
                        handleNavigation(page)
                    }}>{page}</p>
                )
            })}
            {props.right && <p>...</p>}
            {props.right && props.right.map((page) => {
                return (
                    <p key={page} id={'page'+page} onClick={() => {
                        handleNavigation(page)
                    }}>{page}</p>
                )
            })}
        </>
    )
}

export default PaginationPagesDisplay;