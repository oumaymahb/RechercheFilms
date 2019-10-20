import React from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/styles";
import { BottomNavigationAction } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = (props) => {

  const { classes } = props;
  return (
    <footer className={classes.footer}>

      <Typography variant="body1" align="center" component="p">
        C'est un test technique pour la sociéte NOBO!
        </Typography>
      <Typography variant="body2" align="center" >
        {'Copyright © '}
        Oumayma Habouri 2019.
      </Typography>
      <Typography align="center" >
        <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} href="https://www.linkedin.com/in/oumayma-habouri-21788711b/" />
        <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} href="https://www.facebook.com/Oumayma.habouri" />
        <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} href="https://www.instagram.com/oumayma_habouri/" />
      </Typography>

    </footer>

  );

}

export default withStyles(styles)(Footer);