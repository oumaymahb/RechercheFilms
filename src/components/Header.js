import React from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/styles";
import { Toolbar, AppBar } from '@material-ui/core';
import logo from './../images/logo-nobo.png'
const Header = (props) => {

    const { classes } = props;
    return (
        <AppBar position="relative" className={classes.header}>
            <Toolbar className={classes.navBar}>
                <img src={logo} alt="nobo logo" style={{ height: "60px", width: "100px" }} />
                <Typography variant="inherit">
                    oumayma.habouri@gmail.com
                 </Typography>

            </Toolbar>
        </AppBar>
    );
}

export default withStyles(styles)(Header);