import React, { Component } from "react";
import "./App.css";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/styles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/Search";
import FilmDetails from "./components/FilmDetails";
import NotFoundPage from "./components/NotFoundPage";
class App extends Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <Router >
        <Header />
        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/details/:id' component={FilmDetails} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </Router>
    )


  }
}

export default withStyles(styles)(App);
