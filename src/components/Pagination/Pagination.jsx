import React from "react";
import ReactPaginate from 'react-paginate';


import styles from './Pagination.module.scss';

const Pagination = ({onChangePage, countElements}) => {
    return (
        <div>
              <ReactPaginate
              className={styles.pagination}
              breakLabel="..."
              nextLabel=">"
              previousLabel="<"
              onPageChange={(event) => onChangePage(event.selected + 1)}
              pageRangeDisplayed={4}
              pageCount={countElements}
              renderOnZeroPageCount={null}
            />
        </div>
    )   
}

export default Pagination;