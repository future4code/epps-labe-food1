import React, { useContext } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {Frete, SubTotal, Valor, DivButton, Container, H} from './styles'
import { Button } from '@material-ui/core';


export default function Payment () {
   
   return(
         <Container>
            <Frete> Frete: R$ valor</Frete>
            <SubTotal>
                <div>SUBTOTAL</div>
                <Valor>R$ Total</Valor>
            </SubTotal>
            <H>Forma de pagamento</H>
            <hr/>
            <FormControl component="fieldset">
                <RadioGroup  >
                    <FormControlLabel value="cash" control={<Radio />} label="Dinheiro" />
                    <FormControlLabel value="creditCard" control={<Radio />} label="Cartão de crédito" />
                </RadioGroup>
            </FormControl> 
        
            <DivButton>
                <Button fullWidth variant="contained" color="primary">
                        Confirmar
                </Button>
            </DivButton>
        </Container>         
    )
}
