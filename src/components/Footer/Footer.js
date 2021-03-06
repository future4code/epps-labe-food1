import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import {
  goToFeed,
  goToBuyCart,
  goToProfilePage,
} from "../../routes/Coordinator";
import GlobalStateContext from "../../context/GlobalStateContext";



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    position: 'fixed',
    bottom: '0',
    zIndex: "1",
    width: "100vw",
    minWidth: "350px"
  },
  footer: {
    padding: theme.spacing(1, 1),
    marginTop: "auto",
    backgroundColor: "white",
  },
}));

export default function Footer() {
  const { states, requests, setters } = useContext(GlobalStateContext);
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <hr />
        <Container
          maxWidth="sm"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button onClick={() => goToFeed(history)} textColor={"primary"}>
            <img
              src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/8CD04B9B-73CB-40DC-AE16-63CE142EF1F4.svg"
              alt="Home"
            />
          </Button>
          <Button onClick={() => goToBuyCart(history)}>
            <img
              src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/EC5DAC84-C9D0-4BA6-869A-6431F534FCBE.svg"
              alt="Buy Cart"
            />
          </Button>
          <Button onClick={() => goToProfilePage(history) || requests.getProfile()|| requests.getOrderHistory()}>
            <img
              src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/14952B60-73C1-4CB5-A219-C37F0F9640B5.svg"
              alt="Person"
            />
          </Button>
        </Container>
      </footer>
    </div>
  );
}
