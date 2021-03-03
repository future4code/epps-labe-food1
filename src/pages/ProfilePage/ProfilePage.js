import React, { useEffect, useState } from 'react'
import BuyHistory from '../../components/BuyHistory/BuyHistory'
import ProfileData from '../../components/ProfileData/ProfileData'
import { ProfileContainer } from './styles'


export default function ProfilePage () {
    
    useEffect(()=>{
        // localStorage.setItem("token", "token") // apenas para teste
    },[])
    
    
    return(
        <ProfileContainer>
            <h3> Meu perfil </h3><hr/>{/* header fake */}
            <ProfileData
                name={"Bruna Oliveira"}
                email={"bruna_o@gmail.com"}
                cpf={"333.333.333-33"}
            />
            
            <ProfileData
                address={"Rua Alesandra Vieira, 42 - Santana"}
            /> 
            
            <BuyHistory/>
            
            
            
        </ProfileContainer>
    )
}