import {  Typography} from '@material-ui/core'
import React from 'react'
import { CardStyled } from './styles'



export default function BuyHistory () {
    const fakeList =[{restaurant: "burguer", orderDate: "23 de Maio 2020", total: 70},
                    {restaurant: "burguer", orderDate: "23 de Maio 2020", total: 70},
                    {restaurant: "burguer", orderDate: "23 de Maio 2020", total: 70}]
    return(
        <div>
            <h4>Histórico de compras</h4>
            {fakeList.map(order=>{
                return (
                <CardStyled>
                    <Typography  color="primary" gutterBottom>
                        {order.restaurant}      
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        {order.orderDate}      
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        R$ {order.total.toFixed(2).replace(".", ",")}      
                    </Typography>
                    
                </CardStyled>)
            })}
        </div>
    )
}