import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// Components
import NavigationBar from "../NavigationBar/NavigationBar";
import HomepageCard from "../card/HomepageCard";
import LoginCard from "../LoginCard/LoginCard";
import RegisterCard from "../RegisterCard/RegisterCard";
import PrivateRouter from "../../../auth/PrivateRouter";
import Dashboard from "../Dashboard/Dashboard";
import Sample from "../jsx/sample.jsx";
import grey from "@material-ui/core/colors/grey";

// css
import "./grid.css";
import { Route, Switch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    borderRadius: 0,
    backgroundColor: grey[100],
    boxShadow: "none",
    color: theme.palette.text.secondary,
    position: "sticky",
    height: "7vh",
  },
  paper2: {
    // padding: theme.spacing(1),
    backgroundColor: grey[100],
    // textAlign: "center",
    // borderRadius: 0,
    // backgroundColor: "red",
    // color: theme.palette.text.secondary,
    height: "100vh",
  },
  toolbar: {
    backgroundColor: "blue",
    height: "100%",
  },
}));

export default function PageGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <NavigationBar />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper2}>
            <HomepageCard />
            <LoginCard />
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    // <div className={classes.root}>
    //   <Grid container spacing={1}>
    //     <Grid container item xs={12} spacing={0}>
    //       <FormRow />
    //     </Grid>
    //   </Grid>
    // </div>
    <div id="content">
      <div id="grid">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <header>
        {/* <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h6" noWrap>
            Mern Skeleton
          </Typography>
        </Toolbar> */}
        <NavigationBar />
      </header>
      <main>
        <div className="intro">
          {/* <div class="inner"></div> */}
          <Switch>
            <Route exact={true} path="/">
              <HomepageCard />
            </Route>
            <Route path="/login">
              <LoginCard />
            </Route>
            <Route path="/register">
              <RegisterCard />
            </Route>
            {/* <Route path="/dashboard">
              <Dashboard />
            </Route> */}

            <PrivateRouter path="/dashboard">
              <Dashboard />
            </PrivateRouter>
          </Switch>

          {/* <LoginCard class="inner" /> */}
        </div>
      </main>
    </div>
    // <>
    //   <div className="navbar">
    //     {/* <Toolbar className={classes.toolbar}>
    //       <Typography className={classes.title} variant="h6" noWrap>
    //         Mern Skeleton
    //       </Typography>
    //     </Toolbar> */}
    //   </div>

    //   {/* <div className="otherdiv">
    //     <HomepageCard />
    //   </div> */}
    // </>
  );
}
