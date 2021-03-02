import React from 'react'
import {Background, Logo, Title} from './styles'
import logoDesktop from "../../assets/logoDesktop.png"

export default function FirstScreen () {
    return(    
        <Background>
            <Logo>
                {/* <Title>Future <strong>Eats</strong></Title> */}
                <Title src={logoDesktop} />
            </Logo>   
        </Background>
    )
}