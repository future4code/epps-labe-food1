import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Title } from "../SignUp/styles";

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

export default function SignUpForm() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Title>
          Future Eats
        </Title>

        
        <Typography component="h1" variant="h5">
          Cadastrar
        </Typography>
        
        <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nome"
            placeholder="Nome e sobrenome"
            name="name"
            pattern={"^.{3,}"}
            title={"Mínimo 3 caracteres"}
            autoComplete="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            placeholder="email@email.com"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="CPF"
            label="CPF"
            placeholder="000.000.000-00"
            name="CPF"
            autoComplete="CPF"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Senha"
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            pattern={"^.{6,}"}
            title={"Mínimo 6 caracteres"}
            name="Senha"
            autoComplete="Senha"
            autoFocus
            // startIcon= {<RemoveRedEyeIcon />}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Confirmar"
            placeholder="Confirme a senha anterior"
            pattern={"^.{6,}"}
            title={"Mínimo 6 caracteres"}
            type="password"
            id="password"
              // startIcon= {<RemoveRedEyeIcon />}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // textColor="black"
            className={classes.submit}
          >
            Criar
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}