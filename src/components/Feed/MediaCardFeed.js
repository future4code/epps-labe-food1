import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { OrderTitle } from "../Restaurant/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    alignItems: "center",
  },
  media: {
    height: 140,
  },
});

export default function MediaCardFeed(props) {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card className={classes.root}>
        <CardActionArea key={props.id}>
          <CardMedia
            style={{ borderRadius: "8px 8px 0 0" }}
            className={classes.media}
            image={props.logoUrl}
          />
          <CardContent style={{ width: "328px" }}>
            <OrderTitle gutterBottom variant="h5" component="h2">
              {props.name}
            </OrderTitle>

            <Typography variant="body2" color="textSecondary" component="p">
              {props.deliveryTime} min Frete R${props.shipping},00
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <br />
    </div>
  );
}
