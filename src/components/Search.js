import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import axios from "./../api";
import { withStyles } from "@material-ui/core/styles";
import styles from "./../styles/styles";
import Typography from "@material-ui/core/Typography";
import FilmList from "./FilmList";
import Pagination from "./Pagination";

const Search = ({ classes, props }) => {
  const [films, setFilms] = useState([]);
  const [searchedFilms, setSearchedFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filmsPerPage] = useState(9);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    const fetchFilms = async () => {
      setLoading(true);
      // la liste des films compléte
      const res = await axios.get("/shows");
      setFilms(res.data);
      setLoading(false);
    };

    fetchFilms();
  }, []);

  //pagination
  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
  const currentFilms = !searchTerm ? films.slice(indexOfFirstFilm, indexOfLastFilm) : searchedFilms.slice(indexOfFirstFilm, indexOfLastFilm);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  function handleChange(event) {
    setSearchTerm(event.target.value);
    /* 
      on a pas besoin de faire appel à l'api une autre fois puisqu'on a toute la liste des films
      On cherche les films par nom
    */
    let result = films.filter(film => {
      return film.name.indexOf(searchTerm) !== -1;
    });


    setSearchedFilms(result);
  }
  // pour que la liste des films ne soit pas vide aprés avoir effacer la recherche
  const Allfilms = searchedFilms.length ? searchedFilms.length : films.length;


  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.mainContent}>
        <div className={classes.heroContent}>
          <Typography align="center" className={classes.title}>
            Trouver un film à voir facilement et rapidement !
          </Typography>
          <Container maxWidth="sm" className={classes.container}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                name="searchTerm"
                value={searchTerm}
                onChange={event => handleChange(event)}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Container>
        </div>

        <FilmList films={currentFilms} searchTerm={searchTerm} loading={loading} />
        <Pagination
          filmsPerPage={filmsPerPage}
          totalFilms={Allfilms}
          paginate={paginate}
          currentPage={currentPage}
        />
      </main>
    </React.Fragment>
  );
};

export default withStyles(styles)(Search);
