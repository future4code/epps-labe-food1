import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "left",
    justifyContent: "flex-start",
    position: "fixed",
    top: "0",
    zIndex: "1",
    width: "100%",
    padding: "0"
  },
  header: {
    padding: theme.spacing(1, 1),
    backgroundColor: "white",
    width: "100vw",
    minWidth: "350px",
  },
}));

export default function Header() {
  const history = useHistory();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Container maxWidth="sm">
          <Button onClick={() => history.goBack()}>
            <ArrowBackIosIcon />
          </Button>
        </Container>
        <hr />
      </header>
    </div>
  );
}
