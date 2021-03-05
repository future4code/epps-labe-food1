import React, { useEffect, useState, useContext } from 'react'
import AddressDelivery from '../../components/AddressDelivery/AdressDelivery';
import Footer from '../../components/Footer/Footer'
import Payment from '../../components/Payment/Payment';
import useProtectedPage from '../../hooks/useProtectedPage';
import {P, ContainerCart} from './styles'
import GlobalStateContext from '../../context/GlobalStateContext';
import CardFood from '../../components/CardFood/CardFood'

export default function BuyCart () {
    useProtectedPage();
    const [orders, setOrders] = useState()
    const { states, requests, setters } = useContext(GlobalStateContext);
    
    // Os valores são estáticos e devem ser apagados
    const cartTeste =[{
        amount: 1,
        category: "Pastel",
        description: "Pastel autêntico, feito na hora!",
        id: "3vcYYSOEf8dKeTPd7vHe",
        name: "Pastel",
        photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg",
        price: 3,
    },
    {
        amount: 1,
        category: "Pastel",
        description: "Pastel autêntico, feito na hora!",
        id: "3vcYYSOEf8dKeTPd7vHe",
        name: "Pastel",
        photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg",
        price: 3,
    }
]

    return(
        <ContainerCart>
            <AddressDelivery/>
            {/* {states.cart && states.cart.map((food)=>{  Deve ser utilizado para renderizar os dados*/} 
                {cartTeste.map((food)=>{ // deve ser apagado
                return <CardFood
                            amount = {food.amount}
                            category ={food.category}
                            description={food.description}
                            id={food.id}
                            name={food.name}
                            photoUrl={food.photoUrl}
                            price={food.price}
                />
            })}
            
            <Payment/>
            
            <Footer />
        </ContainerCart>
    )
}
