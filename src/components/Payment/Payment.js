import React, { useContext, useState } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Frete, SubTotal, Valor, DivButton, Container, H } from './styles'
import { Button, Typography } from '@material-ui/core';
import GlobalStateContext from '../../context/GlobalStateContext';


export default function Payment() {
    const { states, requests, setters } = useContext(GlobalStateContext);
    const [emAndamento, setEmAndamento] = useState(false)

    const showPage = () => {
        if (emAndamento) {
            return (<DivButton >
                <Typography variant="body2" textAlign="center" color="textSecondary" component="p">
                    <p>
                        Pedido em andamento 
                    </p>
                    <p>
                        SUBTOTAL:   {(states.totalValue).toFixed(2)}
                    </p>
                </Typography>
            </DivButton>
            );
        }

    };

    return (
        <Container>
            <Frete> Frete: R$ {(states.shipping).toFixed(2)}</Frete>
            <SubTotal>
                <div>SUBTOTAL</div>
                <Valor>R$ {(states.totalValue).toFixed(2)} Total</Valor>
            </SubTotal>
            <H>Forma de pagamento</H>
            <hr />
            <FormControl component="fieldset">
                <RadioGroup  >
                    <FormControlLabel value="cash" control={<Radio />} label="Dinheiro" />
                    <FormControlLabel value="creditCard" control={<Radio />} label="Cartão de crédito" />
                </RadioGroup>
                <Button onClick={() => { setEmAndamento(!emAndamento) }} fullWidth variant="contained" color="primary">
                    Confirmar
                </Button>
            </FormControl>
            {showPage()}

        </Container>
    )
}
