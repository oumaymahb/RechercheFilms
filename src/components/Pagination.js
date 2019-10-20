import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./../styles/styles";

const Pagination = ({ currentPage, classes, filmsPerPage, totalFilms, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFilms / filmsPerPage); i++) {
    pageNumbers.push(i);
  }

  let current = '';

  return (
    <nav className={classes.nav}>
      <ul className={classes.cdPagination}>
        {pageNumbers.map(number => {
          if (number === currentPage) {
            current = classes.current;
          } else {
            current = ''
          }
          return (<li key={number} className={`${classes.cdPaginationLi} ${current}`}>
            <span
              onClick={() => paginate(number)}
              className={classes.cdPaginationA}
            >
              {number}
            </span>
          </li>);
        })}
      </ul>
    </nav>
  );
};

export default withStyles(styles)(Pagination);
