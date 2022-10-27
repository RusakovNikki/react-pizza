import React from 'react'
import styles from './Pagination.module.scss'

import ReactPaginate from 'react-paginate';

const Pagination = ({ onChangePages }) => {
    return (
        <ReactPaginate
            className={styles.pagination}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={e => onChangePages(e.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            renderOnZeroPageCount={null}
        />
    )
}

export default Pagination
