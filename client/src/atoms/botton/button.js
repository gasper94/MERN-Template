import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700]
    }
  }
}))(Button);

export default function Buttonx() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <ColorButton
        variant="contained"
        color="primary"
        className={classes.margin}
      >
        Custom CSS
      </ColorButton>
    </div>
  );
}
