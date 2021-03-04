import React, {useContext, useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GlobalStateContext from '../../context/GlobalStateContext';
import useForm from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';

function Copyright() {

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Future Eats
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
  useProtectedPage();
  //mudar para página de editar profile
  const [token, setToken] = useState("")
  useEffect(()=>{
    setToken(localStorage.getItem("token"))
  },[]) // provisório para teste
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const [valuesConfirme, setValuesConfirme] = React.useState({
    confirm: "",
    showConfirm: false,
  });
  const [showText, setShowText] = useState(false);





  const history = useHistory()
  const { states, requests, setters } = useContext(GlobalStateContext);
  const [form, onChange, clearFields] = useForm({
    street: "", 
    number: "",
    neighbourhood: "", 
    city: "" ,
    state: "" ,
    complement: "" });


  const handleClick = (event) => {
    event.preventDefault()
    requests.addAdress(form)
    clearFields()
      history.push("/feed")
  };

  return (
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      {!token && (<div>
            Meu endereço
        </div>)}
        <form onSubmit={handleClick} className={classes.form}>            
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="logradouro"
            label="Logradouro"
            placeholder= "Rua / Av."
            name="street"
            value={form.street}
            onChange={onChange}
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
            name="number"
            value={form.number}
            onChange={onChange}
            autoComplete="numero"
            type='number'
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
            name="complement"
            value={form.complement}
            onChange={onChange}
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
            name="neighbourhood"
            value={form.neighbourhood}
            onChange={onChange}
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
            name="city"
            value={form.city}
            onChange={onChange}
            autoComplete="cidade"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="state"
            label="Estado"
            value={form.state}
            onChange={onChange}
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