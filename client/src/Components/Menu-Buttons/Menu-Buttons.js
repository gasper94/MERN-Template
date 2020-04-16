import React from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { fade, makeStyles } from "@material-ui/core/styles";

// Auth
import auth from "../../../auth/auth-helper";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  button: {
    fontSize: 12,
    fontFamily: "Comic Neue",
    backgroundColor: "#fafafa",
    margin: 10,
    "&:hover": {
      backgroundColor: fade("#9e9e9e", 1),
    },
    marginBottom: 10,
  },
  toolbar: {
    // height: "100%"
    backgroundColor: "#03a9f4",
    // borderBlockWidth: 20,
    // boxShadow: 10,
    // marginTop: 10,
    // textAlign: "center"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    fontSize: "150%",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    color: "#fafafa",
    marginBottom: -10,
    // marginInlineEnd: "30%"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade("#81d4fa", 0.5),
    "&:hover": {
      backgroundColor: fade("#81d4fa", 0.2),
    },
    marginRight: theme.spacing(2),
    marginLeft: 1,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      width: "auto",
      marginBottom: -15,
    },
    marginBottom: -8,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    marginBottom: -15,
    color: "#fafafa",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    marginBottom: -10,
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  mobileTitle: {
    fontSize: "150%",
    position: "relative",
    color: "white",
    marginRight: theme.spacing(10),
    marginLeft: 1,
    width: "100%",
    marginBottom: -10,
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  homebutton: {
    fontSize: "140%",
    marginBottom: -3,
  },
}));

function AuthButton() {
  let history = useHistory();
  const classes = useStyles();

  return auth.isAuthenticated() ? (
    <Button
      className={classes.button}
      onClick={() => {
        auth.signout(() => history.push("/"));
      }}
    >
      Log out
    </Button>
  ) : (
    // <button
    //   onClick={() => {
    //     auth.signout(() => history.push("/"));
    //   }}
    // >
    //   Sign out
    // </button>
    <>
      <Link to={"/register"}>
        <Button className={classes.button}>Register</Button>
      </Link>
      <Link to={"/login"}>
        <Button className={classes.button}>Log in</Button>
      </Link>
    </>
  );
}

export default AuthButton;
