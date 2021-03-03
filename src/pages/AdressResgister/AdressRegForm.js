import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AdressRegForm() {

  //mudar para página de editar profile
  const [token, setToken] = useState("")
  useEffect(()=>{
    setToken(localStorage.getItem("token"))
  },[]) // provisório para teste

  const classes = useStyles();

  return (
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      {!token && (<div>
            Meu endereço
        </div>)}
        <form className={classes.form} noValidate>            
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="logradouro"
            label="Logradouro"
            placeholder= "Rua / Av."
            name="logradouro"
            autoComplete="logradouro"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="numero"
            label="Número"
            placeholder="Número"
            name="numero"
            autoComplete="numero"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="complemento"
            label="Complemento"
            placeholder="Apto./ Bloco"
            name="complemento"
            autoComplete="complemento"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="bairro"
            label="Bairro"
            placeholder="Bairro"
            name="bairro"
            autoComplete="bairro"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="cidade"
            label="Cidade"
            placeholder="Cidade"
            name="cidade"
            autoComplete="cidade"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="estado"
            label="Estado"
            placeholder="Estado"
            id="estado"
            autoComplete="estado"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            salvar
          </Button>
         </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}