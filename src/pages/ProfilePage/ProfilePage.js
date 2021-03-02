import React, { useEffect, useState } from 'react'
import ProfileData from '../../components/ProfileData/ProfileData'


export default function ProfilePage () {
  
    // const BASE_URL = "https://us-central1-missao-newton.cloudfunctions.net/futureeats"
    
    // useEffect(()=>{
    //     getHistory()
    // },[])
    //  const getHistory = () =>{ // vai para useRequestData.js
    //      token = localStorage.getItem("token")
    //      axios.get(`${BASE_URL}/orders/history`,{
    //          headers:{
    //              token:token
    //          }
    //      })
    //  }
 
    return(
        <div>
            <h3> Meu perfil </h3><hr/>{/* header fake */}
            <ProfileData
                name={"Bruna Oliveira"}
                email={"bruna_o@gmail.com"}
                cpf={"333.333.333-33"}
            />
            <h4>Endereço Cadastrado</h4>
            <ProfileData
                address={"Rua Alesandra Vieira, 42 - Santana"}
            /> 
            <h4>Histórico de pedidos</h4><hr/>
            
            <p>Você  não realizou nenhum pedido.</p>
            
        </div>
    )
}