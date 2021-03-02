import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  OrderCard,
  MainCardContent,
  OrderTitle,
  OrderImage,
  OrderPrice,
  OrderButton,
} from "./styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    alignItems: "center",
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            style={{ borderRadius: "8px 8px 0 0" }}
            className={classes.media}
            image="https://i.imgur.com/sb0Ugp3.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <OrderTitle gutterBottom variant="h5" component="h2">
              Bullguer Villa Mariana
            </OrderTitle>
            <Typography variant="body2" color="textSecondary" component="p">
              Burguer
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              50 - 60 minutos <span>Frete: R$ 6,00</span>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              R. Fradique Coutinho, 1136 - Vila Mariana
            </Typography>
            <p>Principais</p>
            <hr />
          </CardContent>
        </CardActionArea>

        <OrderCard>
          <OrderImage src="https://i.imgur.com/ozL2bZB.png" />

          <MainCardContent>
            <OrderTitle gutterBottom variant="h5" component="h2">
              Bullguer
            </OrderTitle>
            <Typography variant="body2" color="textSecondary" component="p">
              Pão, queijo, carne, picles e molho
            </Typography>

            <OrderPrice>
              <p>R$ 20,00</p>
              <CardActions>
                <OrderButton>enviar</OrderButton>
              </CardActions>
            </OrderPrice>
          </MainCardContent>
        </OrderCard>
        <hr />
        {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
      </Card>
    </div>
  );
}
