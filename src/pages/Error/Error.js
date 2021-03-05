import React from 'react'
import Footer from '../../components/Footer/Footer'
import styled from 'styled-components'
import Error404 from '../../assets/error.png'

const Erro = styled.img`
display: flex;
align-items: center;
width: 100%;
display: flex;
margin: 0 auto;
margin-top: 35px;
margin-left: -20px; 
max-width: 500px;
`

export default function Error () {
    return(
        <div>
            <Erro src={Error404} />
            <Footer />
        </div>
    )
}