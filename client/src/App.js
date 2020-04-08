import React from "react";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import PageGrid from "./Components/Grid/Grid";

function App() {
  // const classes = useStyles();
  return (
    <HashRouter>
      {/* <div> */}
      {/* <NavigationBar />
      <HomepageCard className={classes.position} /> */}
      <PageGrid />
      {/* </div> */}
    </HashRouter>
  );
}

export default App;
