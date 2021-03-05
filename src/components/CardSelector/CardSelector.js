import React, { useContext, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import useForm from "../../hooks/useForm";
import GlobalStateContext from "../../context/GlobalStateContext";
import Card from "@material-ui/core/Card";
import {OrderButton, CloseButton, OrderImage, Cont} from './styles'
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "0",
    color: "primary",
  },
}));

export default function CardSelector(props) {
  const { states, requests, setters } = useContext(GlobalStateContext);
  const [form, onChange, clear] = useForm({ quantidade: "1" });

  const updateQuantity = () => {
    if (form.quantidade > 1) {
      setters.setCartQuantity(form.quantidade);
    }
  };
  const onClickFunction = () =>{
    requests.addItemToCart(props.selectedItem)
    props.setSelectcart(false)
  }
  
  return (
    <Card
      style={{
        backgroundColor: "primary",
        width: "200px",
        alignItems: "center",
        position: "fixed",
        zIndex: "100",
      }}
    >
      
      <CloseButton
        onClick={()=>props.setSelectcart(false)}
        color={"neutralColor"}
      >
        X
      </CloseButton>
      <Typography variant="body2" textAlign="center" color="textSecondary" component="p">
      <Box textAlign="center" m={1}>
        {props.selectedItem.name}
       
      </Box>
      </Typography>
      <OrderImage src={props.selectedItem.photoUrl}/>
              

      <br />
      <Cont>
      <form>
        <input
          required
          name="quantidade"
          type="number"
          value={form.quantidade}
          onChange={onChange}
          width={"4px"}
        ></input>
        {updateQuantity()}
      </form>
      <OrderButton
        onClick={onClickFunction}
        type="submit"
        fullWidth
        color={"neutralColor"}
      >
        adcionar ao carrinho{" "}
      </OrderButton>
      </Cont>
    </Card>
  );
}
