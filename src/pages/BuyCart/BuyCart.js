import React, { useEffect, useState } from 'react'
import AddressDelivery from '../../components/AddressDelivery/AdressDelivery';
import Footer from '../../components/Footer/Footer'
import Payment from '../../components/Payment/Payment';
import useProtectedPage from '../../hooks/useProtectedPage';
import { getActiveOrder } from '../../Services/use';
import {P, ContainerCart} from './styles'

export default function BuyCart () {
    useProtectedPage();
    const [orders, setOrders] = useState()
    useEffect(()=>{
        getActiveOrder(setOrders)
    },[])
    return(
        <ContainerCart>
            <AddressDelivery/>
             <P>Carrinho vazio</P>
            {/* {orders.order !==null && (<Payment
                    restaurant={orders.order.restaurantName}
                    totalPrice={orders.order.totalPrice}
                />)
              
            } */}
            <Payment/>
            
            
            <Footer />
        </ContainerCart>
    )
}

// order:
// createdAt: 1614815276070
// expiresAt: 1614818876070
// restaurantName: "Habibs"
// totalPrice: 41