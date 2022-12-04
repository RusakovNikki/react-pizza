import React from "react"
import styles from "./Pagination.module.scss"

import ReactPaginate from "react-paginate"
import { useDispatch, useSelector } from "react-redux"
import { onChangePages } from "../../redux/slices/filterSlice"

const Pagination = () => {
    const dispatch = useDispatch()
    return (
        <ReactPaginate
            className={styles.pagination}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(e) => dispatch(onChangePages(e.selected + 1))}
            pageRangeDisplayed={4}
            pageCount={3}
            renderOnZeroPageCount={null}
        />
    )
}

export default Pagination
