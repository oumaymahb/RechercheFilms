import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import styles from "./../styles/styles";
import { withRouter} from 'react-router-dom'


const FilmCard = (props) => {

  const { classes, film } = props;
  
  const handleClick = (id) => { 
    props.history.push('/details/'+ id);
  }


  return (
      <Grid  item xs={12} sm={6} md={4} >
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image= {film.image ? film.image.medium : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pas_d%27image_disponible.svg/300px-Pas_d%27image_disponible.svg.png"}
          title="Image title"
          
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2" align="center">
                      {film.name}
          </Typography>
          <Typography className={classes.filmDescription}>
          { film.summary ? film.summary.slice(0,film.summary.indexOf('.')+1).replace(/<(.|\n)*?>/g, '')+'...' : 'Pas de description.'}
          </Typography>
        </CardContent>
              <CardActions className={classes.cardActions}>
          <Button  color="primary" className={classes.cardButton} onClick={() => handleClick(film.id)}>
            Voir détails
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
    
}

export default withRouter(withStyles(styles)(FilmCard));