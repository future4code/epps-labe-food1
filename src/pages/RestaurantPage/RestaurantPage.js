import React from 'react'
import Footer from '../../components/Footer/Footer';
import MediaCard from '../../components/Restaurant/MediaCard'
import useProtectedPage from '../../hooks/useProtectedPage';

export default function RestaurantPage () {
    useProtectedPage();
    return(
        <div>
            <h1 align="center">Restaurantes</h1>
            <MediaCard />
            <Footer />
        </div>
    )
}