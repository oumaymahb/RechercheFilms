import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import FilmCard from "./../components/FilmCard";
import { withStyles } from "@material-ui/core/styles";
import styles from "./../styles/styles";

const FilmList = ({ searchTerm, classes, films, loading }) => {
  if (loading) {
    return <CircularProgress className={classes.progress} />;
  }
  if (!films.length) {
    return (
      <Typography align="center">
        Aucun résultat ne correspond à votre recherche: {searchTerm}.
      </Typography>
    );
  }
  return (
    <Container className={classes.cardGrid}>
      <Grid container spacing={4}>
        {films.map(film => (
          <FilmCard key={film.id} film={film} />
        ))}
      </Grid>
    </Container>
  );
};

export default withStyles(styles)(FilmList);
