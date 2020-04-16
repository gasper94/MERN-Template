import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// Card
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import shell from "/Users/ulisesmartinez/Desktop/Mine/client/src/seashell.jpg";
import Grid from "@material-ui/core/Grid";
import shell from "../../MERN.png";
// import shell from "./seashell.jpg";

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

export default function HomapageCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100%" }}
      >
        <Card className={classes.paper}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={shell}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                MERN
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                MERN Stack is a Javascript Stack that is used for easier and
                faster deployment of full-stack web applications.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}
