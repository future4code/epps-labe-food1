import React from "react";

import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ContainerFoot, DisplayButtonFooter } from "./styles"

export default function Footer() {
  return (
    <ContainerFoot>
      <DisplayButtonFooter>
        <img
          src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/8CD04B9B-73CB-40DC-AE16-63CE142EF1F4.svg"
          alt="Home"
        />
        <img
          src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/EC5DAC84-C9D0-4BA6-869A-6431F534FCBE.svg"
          alt="Buy Cart"
        />
        <img
          src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/14952B60-73C1-4CB5-A219-C37F0F9640B5.svg"
          alt="Person"
        />
      </DisplayButtonFooter>
    </ContainerFoot>
  );
}
