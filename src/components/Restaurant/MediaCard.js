import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GlobalStateContext from "../../context/GlobalStateContext";
import useProtectedPage from '../../hooks/useProtectedPage';
import Loading from "../../assets/loading.gif";
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

export default function MediaCard(props) {
  // useProtectedPage();
  // console.log('{props.deliveryTime}', {deliveryTime})
  const classes = useStyles();
  const { states, requests, setters } = useContext(GlobalStateContext);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {states.isLoading ? <img style={{ margin: "0 47%" }} src={Loading} /> :
        <Card className={classes.root}>
          {console.log('deliveryTime', props)}
          <CardActionArea>
            <CardMedia
              style={{ borderRadius: "8px 8px 0 0" }}
              className={classes.media}
              image={states.restauranteDetails.logoUrl}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {states.restauranteDetails.description}
              </Typography>
              <OrderTitle gutterBottom variant="h5" component="h2">
                {states.restauranteDetails.name}
              </OrderTitle>
              <Typography variant="body2" color="textSecondary" component="p">
                {states.restauranteDetails.category}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {states.deliveryTime} minutos <span> Frete: R$ {states.shipping},00</span>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {states.restauranteDetails.address}
              </Typography>
              <p>Principais</p>
              <hr />
            </CardContent>
          </CardActionArea>

          {states.restauranteDetails.products.map((item) => {
            return (
               <OrderCard key={item.id}>
              <OrderImage src={item.photoUrl}/>
  
              <MainCardContent>
                <OrderTitle gutterBottom variant="h5" component="h2">
                  {item.name}
              </OrderTitle>
                <Typography variant="body2" color="textSecondary" component="p">
                 {item.description}
              </Typography>
  
                <OrderPrice>
                  <p>R$ {item.price}</p>
                  <CardActions>
                    <OrderButton>Adicionar</OrderButton>
                  </CardActions>
                </OrderPrice>
              </MainCardContent>
            </OrderCard> )
          })}
       </Card>
      }
    </div>
  );
}
