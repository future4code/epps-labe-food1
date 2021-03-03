import React, { useEffect, useState } from 'react'
import BuyHistory from '../../components/BuyHistory/BuyHistory'
import Footer from '../../components/Footer/Footer';
import ProfileData from '../../components/ProfileData/ProfileData'
import useProtectedPage from '../../hooks/useProtectedPage';
import { ProfileContainer } from './styles'


export default function ProfilePage() {
    useProtectedPage();
    useEffect(() => {
        // localStorage.setItem("token", "token") // apenas para teste
    }, [])


    return (
        <ProfileContainer>
            <h3> Meu perfil </h3><hr />{/* header fake */}
            <ProfileData />
            <BuyHistory />
            <Footer />

        </ProfileContainer>
    )
}