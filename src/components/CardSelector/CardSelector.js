import React, { useContext } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import GlobalStateContext from "../../context/GlobalStateContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    position: "fixed",
    zIndex: "1",
    width: "100%",
    padding: "0",
    position: 'absolute',
    color: 'primary',
  },
}));

export default function CardSelector(props) {
  const { states, requests, setters } = useContext(GlobalStateContext);
  const [form, onChange, clear] = useForm({ quantidade: "0" });


  
  return (
    <div style={{ width: '200px', alignItems: 'center' }} >

      <p>{props.selectedItem.name}</p>
      <img style={{ width: '50%' }} src={props.selectedItem.photoUrl}></img>
      <br />
      <form>
        <input
          required
          name="quantidade"
          type='number'
          value={form.quantidade}
          onChange={onChange}
          width={'10px'}

        ></input>
      </form>
      <Button onClick={() => requests.addItemToCart(props.selectedItem)} type="submit" fullWidth color={"neutralColor"} >adcionar ao carrinho </Button>
    </div>
  );
}
