import React from 'react';
import DisplayPagesPlain from "./pagesDisplayVariants/DisplayPagesPlain";
import DisplayPagesLeft from "./pagesDisplayVariants/DisplayPagesLeft";
import DisplayPagesRight from "./pagesDisplayVariants/DisplayPagesRight";
import DisplayPagesCenter from "./pagesDisplayVariants/DisplayPagesCenter";
import styles from "../../assets/css/components/pagination/Pagination.module.css"

const PaginationPagesDisplay = (props: { page: number, total: number | undefined}) => {
    const {page, total} = props;
    let pagination;


    if (total && total < 12) {
        pagination = <DisplayPagesPlain total={total}/>
    } else if (total) {
        if (page < 8) {
            pagination = <DisplayPagesLeft total={total}/>
        } else if (page > 34) {
            pagination = <DisplayPagesRight total={total}/>
        } else {
            pagination = <DisplayPagesCenter  total={total}/>
        }
    }

    return (
        <div className={styles.pages}>
            {pagination}
        </div>
    );
};




export default PaginationPagesDisplay;