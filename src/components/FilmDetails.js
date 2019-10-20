import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./../styles/styles";
import { CardMedia, Card, Typography, Button, Paper } from "@material-ui/core";
import axios from "./../api";

class FilmDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      film: {},
      cast: [],
      loaded: false,
    };
  }

  componentDidMount() {
    console.log(this.props)
    // &embed=cast permet de donner plus d'informations sur le film
    axios.get(`shows/${this.props.match.params.id}?embed=cast`).then(result => {
      this.setState({
        film: result.data,
        cast: result.data._embedded.cast,
        loaded: true,
      })

    }).catch(err => {
      console.log('err:', err)
    })
  }

  handleReturn = () => {
    this.props.history.push('/');
  }
  render() {
    const { film } = this.state;
    const { classes } = this.props;
    return (
      <React.Fragment>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography className={classes.detailsTitle} variant="h4">
              {film.name}
            </Typography>
            <Card className={classes.cardDetails}>
              <CardMedia
                className={classes.cardMedia}
                image={film.image ? film.image.medium : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pas_d%27image_disponible.svg/300px-Pas_d%27image_disponible.svg.png"}
                title="Image title"
              />
            </Card>
            <Typography variant="subtitle1">
              <b>Description</b>:{" "}
            </Typography>
            <Typography className={classes.detailsText} >
              {film.summary ? film.summary.replace(/<(.|\n)*?>/g, '') : 'Pas de description.'}
            </Typography>
            <Typography>
              <b>Type : </b>
              {film.type ? film.type : 'Non disponible..'}
            </Typography>
            <Typography>
              <b>Language : </b>
              {film.language ? film.language : 'Non disponible..'}
            </Typography>
            <Typography>
              <b>Diffusé le : </b>
              {film.premiered ? film.premiered : 'Non disponible..'}
            </Typography>
            <Typography>
              <b>Site Officiel : </b>
              {film.officialSite ? <a href={film.officialSite} >{film.officialSite}</a> : 'Lien non disponible.'}

            </Typography>

            <div className={classes.detailsButton}>
              <Button
                variant="contained"
                color="primary"
                className={classes.retourButton}
                onClick={this.handleReturn}
              >
                Retour
              </Button>
            </div>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(FilmDetails);
