import React, {useEffect, useState} from 'react';
import styles from "../styles/css/components/Pagination.module.css"
import {useNavigate, useSearchParams} from "react-router-dom";

const PaginationPagesDisplay = (props: { page: number, total: number | undefined, path:string }) => {
    const {page, total} = props;
    let pagination;
    if (total && total < 12) {
        pagination = <DisplayPlain page={page} total={total} path={props.path}/>
    } else if (total) {
        if (page < 8) {
            pagination = <DisplayLeft page={page} total={total} path={props.path}/>
        } else if (page > 34) {
            pagination = <DisplayRight page={page} total={total} path={props.path}/>
        } else {
            pagination = <DisplayCenter page={page} total={total} path={props.path}/>
        }
    }

    return (
        <div className={styles.pages}>
            {pagination}
        </div>
    );
};
const DisplayPlain = (props: { page: number, total: number, path:string }) => {
    let array = new Array(props.total);
    for (let i = 1; i <= props.total; i++) {
        array.push(i);
    }
    return (
        <DisplayPages currentPage={props.page} left={array} path={props.path}/>
    )
}
const DisplayLeft = (props: { page: number, total: number, path:string }) => {
    const arrayLeft = [1, 2, 3, 4, 5, 6, 7, 8];
    const arrayRight = [props.total - 1, props.total];

    return (
        <DisplayPages currentPage={props.page} left={arrayLeft} right={arrayRight} path={props.path}/>
    )
}
const DisplayRight = (props: { page: number, total: number, path:string }) => {
    const arrayLeft = [1, 2];
    const arrayRight = new Array(8);
    for (let i = props.total; i >= props.total - 8; i--) {
        arrayRight.unshift(i);
    }

    return (
        <DisplayPages currentPage={props.page} left={arrayLeft} right={arrayRight} path={props.path}/>
    )
}
const DisplayCenter = (props: { page: number, total: number, path:string }) => {
    let [searchParams, setSearchParams] = useSearchParams();
    const page: number = parseInt(searchParams.get("page") || '1')


    const arrayLeft = [1, 2];
    const arrayRight = [props.total - 1, props.total];
    const arrayCenter = [page - 2, page - 1, page, page + 1, page + 2]
    return (
        <DisplayPages currentPage={props.page} left={arrayLeft} center={arrayCenter} right={arrayRight} path={props.path}/>
    )
}

const DisplayPages = (props: { currentPage: number, left: number[], right?: number[], center?: number[], path:string }) => {
    let navigate = useNavigate();
    let [searchParams, setSearchParams] = useSearchParams();
    const page = parseInt(searchParams.get("page")||"1");

    const [currentPage, setCurrentPage] = useState(page)

    useEffect(() => {
        const prevPageElement: HTMLElement | null = document.getElementById('page' + currentPage);
        const currentPageElement: HTMLElement | null = document.getElementById('page' + page);
        if (currentPageElement && prevPageElement) {
            prevPageElement.className = "";
            currentPageElement.className = styles.currentPage
        }
        setCurrentPage(props.currentPage)
    }, [currentPage, searchParams])

    const handleNavigation = (page: number) => {
        searchParams.set("page", String(page) )
        navigate(`${props.path}/?${searchParams}`)
        document.getElementById("topView")?.scrollIntoView({behavior: "smooth"})
    }
    return (
        <>
            {props.left.map((page) => {
                return (
                    <p key={page} id={'page' + page} onClick={() => {
                        handleNavigation(page)
                    }}>{page}</p>
                )
            })}
            {props.center && <p>...</p>}
            {props.center && props.center.map((page) => {
                return (
                    <p key={page} id={'page' + page} onClick={() => {
                        handleNavigation(page)
                    }}>{page}</p>
                )
            })}
            {props.right && <p>...</p>}
            {props.right && props.right.map((page) => {
                return (
                    <p key={page} id={'page' + page} onClick={() => {
                        handleNavigation(page)
                    }}>{page}</p>
                )
            })}
        </>
    )
}

export default PaginationPagesDisplay;