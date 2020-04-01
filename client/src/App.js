import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
// import Users from "./Components/users/users";
// import { makeStyles } from "@material-ui/core/styles";

// Components
// import HomepageCard from "./Components/card/HomepageCard";
// import NavigationBar from "./Components/NavigationBar/NavigationBar";
import PageGrid from "./Components/Grid/Grid";

// Card position
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
// import ButtonBase from "@material-ui/core/ButtonBase";

// Default
// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },
//   title: {
//     flexGrow: 1
//   }
// }));

function App() {
  // const classes = useStyles();
  return (
    <Router>
      <div>
        {/* <NavigationBar />
      <HomepageCard className={classes.position} /> */}
        <PageGrid />
      </div>
    </Router>
  );
}

export default App;
