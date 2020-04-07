import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import PageGrid from "./Components/Grid/Grid";

function App() {
  // const classes = useStyles();
  return (
    <BrowserRouter>
      {/* <div> */}
      {/* <NavigationBar />
      <HomepageCard className={classes.position} /> */}
      <PageGrid />
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
