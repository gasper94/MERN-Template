import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 2000,
  },
  media: {
    height: 470,
  },
  paper: {
    // margin: "1%",
    marginTop: 5,
    // marginBottom: "100%"
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>DASHBOARD</div>
    </div>
  );
}
