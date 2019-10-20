import {fade} from "@material-ui/core/styles";

const styles = theme => ({
  navBar: {
    display: "flex",
    justifyContent: "space-between"
  },
  title: {
    color: "#626467",
    fontFamily: "cursive",
    height: "70px"
  },
  search: {
    position: "relative",
    borderRadius: "23px",
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.1)
    },
    marginLeft: 0,
    width: "100%",
    height: "45px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  mainContent: {
    backgroundColor: "white"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1.8, 1, 1, 7),
    width:'450px'
   
  },

  icon: {
    color: "white"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardButton: {
    margin: "auto",
    color: "white"
  },
  retourButton:{
    margin: "auto",
    marginTop:"20px"
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    minHeight: "263px",
    backgroundColor: "white",
    width: "75%"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "13px",
    width: "310px",
    backgroundColor: "WhiteSmoke"
  },
  cardMedia: {
    paddingTop: "74.25%", // 16:9
    backgroundSize: "contain",
    marginTop: 10
  },
  cardContent: {
    flexGrow: 1
  },
  cardActions: {
    backgroundColor: "#e8725e"
  },
  filmDescription: {
    fontSize: "0.9rem",
    textAlign: "justify",
    marginTop: "20px"
  },
  footer: {
    width: "100%",
    bottom: 0,
    display: "block",
    color: "white",
    paddingTop: 28,
    backgroundColor: "#434347"
  },

  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    backgroundColor: "WhiteSmoke"
  },
  detailsTitle: {
    fontFamily: "monospace",
    textAlign: "center",
    marginBottom: "30px",
    marginTop: "20px"
  },
  detailsText: {
    marginRight: "15px",
    fontWeight: 400,
    lineHeight: 1.75,
    marginBottom:"10px",
    marginTop: "10px",
    marginLeft: "15px",
    textAlign: "justify"
  },
  detailsButton: {
    margin: "auto",
    width: 250,
    display: "flex",
    justifyContent: "space-between"
  },
  cardDetails: {
    width: "57%",
    margin: "auto",
    display: "flex",
    bordeRadius: "13px",
    flexDirection: "column",
    marginBottom: "30px"
  },
  header: {
    backgroundColor: "#f6bbb1",
    color: "#808182"
  },
  progress: {
    size: "50px",
    margin: "auto"
  },
  nav: {
    textAlign: 'center',
  },
  cdPagination: {
    width: "100%",
    maxWidth: "100%",
    margin: "2em auto 4em",
    textAlign: "center"
  },
  cdPaginationLi: {
    display: 'inline-block',
    margin:'.2em .2em',
  },
  cdPaginationA: {
    display: 'inline-block',
    padding: '.6em .8em',
    fontSize: '0.9rem',
    border: '1px solid #e6e6e6',
    borderRadius: '0.25em',
    webkitUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
    cursor:'pointer',
  },
  current: {
    backgroundColor: '#f6bbb1',
  }
});

export default styles;
