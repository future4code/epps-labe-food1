import React, { useState } from "react";
import axios from "axios";
import GlobalStateContext from "../context/GlobalStateContext";
import { BASE_URL, appName } from '../constants/baseUrl'
import { useHistory } from "react-router-dom";

const GlobalState = (props) => {
    const [restauranteDetails, setRestauranteDetails] = useState([])
    const [restaurantes, setRestaurantes] = useState([])
    const [orderHistory, setOrderHistory] = useState([])
    const [deliveryTime, setdeliveryTime] = useState()
    const [shipping, setShipping] = useState()
    const [profile, setProfile] = useState([])
    const [profileAdress, setProfileAdress] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [cart, setCart] = useState([])
    const [cartQuantity, setCartQuantity] = useState()
    const history = useHistory();



    const addItemToCart = (newItem) => {
        const index = cart.findIndex((i) => i.id === newItem.id);
        let newCart = [...cart];
        if (index === -1) {
            newCart.push({ ...newItem, amount: cartQuantity });
        } else {
            newCart[index].amount += cartQuantity;
        }
        setCart(newCart);
        alert(`${newItem.name} foi adicionado ao seu carrinho!`);
        console.log('object', newCart)
    };

    const removeItemFromCart = (itemToRemove) => {
        const index = cart.findIndex((i) => i.id === itemToRemove.id);
        let newCart = [...cart];
        if (newCart[index].amount === 1) {
          newCart.splice(index, 1);
        } else {
          newCart[index].amount -= 1;
        }
        setCart(newCart);
        console.log('newCart', newCart)
      };


    const login = (form) => {
        axios.post(`${BASE_URL}/${appName}/login`, form)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                window.alert(`Bem-vindo(a), ${res.data.user.name}!`)
                history.push("/feed")
            })

            .catch((err) => {
                console.log(err)
                window.alert("Usuario ou Senha incorreta!")
            })
    };

    const signUp = (form) => {
        axios.post(`${BASE_URL}/${appName}/signup`, form)
            .then((res) => {
                window.alert(`Bem-vindo(a), ${res.data.user.name}!`)
                localStorage.setItem("token", res.data.token)
            })
            .catch((err) => {
                console.log('form', form)
                console.log(err)
                window.alert(`${err}`)
            })
    };
    const upDateProfile = (form, id) => {
        axios.post(`${BASE_URL}/${appName}/restaurants/${id}/order`, form)
            .then((res) => {
                window.alert(`Bem Vindo ${res.data.user.name}`)
                localStorage.setItem("token", res.data.token)
            })
            .catch((err) => {
                console.log(err)
                window.alert("Usuario ou Senha incorreta!")
            })
    };

    const getOrder = () => {
        axios.get(`${BASE_URL}/${appName}/orders/history`,
            {
                headers: {
                    auth: localStorage.getItem("token")
                }
            }
        )
            .then((res) => {
                setRestaurantes(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    };
    const getOrderHistory = () => {
        axios.get(`${BASE_URL}/${appName}/active-order`,
            {
                headers: {
                    auth: localStorage.getItem("token")
                }
            }
        )
            .then((res) => {
                console.log('res.data', res.data)
                setRestaurantes(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    };
    const getRestaurantesDetails = (id) => {
        axios.get(`${BASE_URL}/${appName}/restaurants/${id}`,
            {
                headers: {
                    auth: localStorage.getItem("token")
                }
            }
        )
            .then((res) => {
                setRestauranteDetails(res.data.restaurant)
                console.log('res.data', isLoading)
                setIsLoading(false)
                console.log('res.data', isLoading)
            })
            .catch((err) => {
                console.log(err)
            })
    };
    const getProfile = (id) => {
        axios.get(`${BASE_URL}/${appName}/profile`,
            {
                headers: {
                    auth: localStorage.getItem("token")
                }
            }
        )
            .then((res) => {
                setProfile(res.data.user)

            })
            .catch((err) => {
                console.log(err)
            })
    };
    const addAdress = (form) => {
        axios.put(`${BASE_URL}/${appName}/address`, form,
            {
                headers: {
                    auth: localStorage.getItem("token")
                }
            })
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                window.alert(`Cadastrado com sucesso!`)
                history.push("/feed")
            })
            .catch((err) => {
                console.log(err)
                window.alert("Verifique o endereço e tente novamente!")
            })
    };

    const getProfileAdress = () => {
        axios.get(`${BASE_URL}/${appName}/profile/address`,
            {
                headers: {
                    auth: localStorage.getItem("token")
                }
            }
        )
            .then((res) => {
                setProfileAdress(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    };
    const updateProfile = (form, history) => {
        const body = {
            name: form.name,
            email: form.email,
            cpf: form.cpf
        }
        console.log(form, body)
        axios.put(`${BASE_URL}/${appName}/profile`, body,
            {
                headers: {
                    auth: localStorage.getItem("token")
                }
            }
        )
            .then((res) => {
                setProfileAdress(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    };


    const states = { cartQuantity,cart, restauranteDetails, isLoading, deliveryTime, shipping, profile, profileAdress, orderHistory };
    const setters = { setdeliveryTime, setShipping ,setCartQuantity};
    const requests = {removeItemFromCart, addItemToCart, login, signUp, getRestaurantesDetails, updateProfile, getProfileAdress, addAdress, getProfile, getOrderHistory };
    const data = { states, setters, requests };

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    );
};

export default GlobalState;
