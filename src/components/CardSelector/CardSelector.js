import React, { useContext, useEffect } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import GlobalStateContext from "../../context/GlobalStateContext";
import Card from "@material-ui/core/Card";

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
      <button onClick={()=>props.setSelectcart(false)}>x</button>
      <p>{props.selectedItem.name}</p>
      <img style={{ width: "50%" }} src={props.selectedItem.photoUrl}></img>
      <br />
      <form>
        <input
          required
          name="quantidade"
          type="number"
          value={form.quantidade}
          onChange={onChange}
          width={"10px"}
        ></input>
        {updateQuantity()}
      </form>
      <Button
        onClick={onClickFunction}
        type="submit"
        fullWidth
        color={"neutralColor"}
      >
        adcionar ao carrinho{" "}
      </Button>
    </Card>
  );
}
