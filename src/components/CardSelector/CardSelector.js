import React, { useContext, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import useForm from "../../hooks/useForm";
import GlobalStateContext from "../../context/GlobalStateContext";
import Card from "@material-ui/core/Card";
import {OrderButton, CloseButton, OrderImage, Cont} from './styles'
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import styled from 'styled-components'

const SelectionTitle = styled.div`
font-size: 13px;
font-weight: 480;
display: flex;
justify-content: center;
`

const InputAdd = styled.input`
margin-left: 1rem;
width: 210px;
height: 25px;
border: 1px solid lightgray;
border-radius: 2px; 

textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 
`

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
        width: "250px",
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
      
      <SelectionTitle>Selecione a quantidade desejada</SelectionTitle>

      <Typography variant="body2" textAlign="center" color="textSecondary" component="p">
      <Box textAlign="center" m={1}>
        {props.selectedItem.name}       
      </Box>
      </Typography>
      <OrderImage src={props.selectedItem.photoUrl}/>
              

      <br />
      <Cont>
      
      <form >
        <InputAdd
          required
          name="quantidade"
          type="number"
          min="0"
          max="10"
          value={form.quantidade}
          onChange={onChange}
        ></InputAdd>
        {updateQuantity()}
      </form>
      <OrderButton
        onClick={onClickFunction}
        type="submit"
        // fullWidth
        color={"neutralColor"}
        style={{fontSize:"0.8rem"}}
      >
        ADICIONAR AO CARRINHO{" "}
      </OrderButton>
      </Cont>
    </Card>
  );
}
