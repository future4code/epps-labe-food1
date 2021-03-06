import styled from 'styled-components'
import { primaryColor } from '../../constants/colors'

export const Frete = styled.p`
    text-align:right;
`
export const H = styled.h5`
    padding-botton: 0;
`
export const SubTotal = styled.div`
    display:flex;
    justify-content: space-between;
`
export const Valor = styled.div`
    color: ${primaryColor};
`
export const Container = styled.div`
    padding: 2vw;
    
`
export const DivButton = styled.div`
    display:flex;
    position: fixed;
    width:200px;
    height:120px;
    margin: -40% 0% 0% 20%;
    z-index:100;
    color: ${primaryColor};
    background-color:whitesmoke;
`