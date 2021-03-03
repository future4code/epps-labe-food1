import React from 'react'
import Footer from '../../components/Footer/Footer'
import useProtectedPage from '../../hooks/useProtectedPage';

export default function BuyCart () {
    useProtectedPage();
    return(
        <div>
            <h1>carrinho</h1>
            <Footer />
        </div>
    )
}