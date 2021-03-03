import React, { useState } from "react";
import axios from "axios";
import GlobalStateContext from "../context/GlobalStateContext";
import { BASE_URL,appName } from '../constants/baseUrl'
import { goToFeed, goToRestaurantPage } from "../routes/Coordinator";
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
    const history = useHistory();

    const login = (form) => {
        axios.post(`${BASE_URL}/${appName}/login`, form)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                window.alert(`Bem Vindo ${res.data.user.name}`)
                console.log('res', res)
            })
            .catch((err) => {
                console.log(err)
                console.log('form', form)
                window.alert("Usuario ou Senha incorreta!")
            })
    };

    const signUp = (form) => {
        axios.post(`${BASE_URL}/${appName}/signup`, form)
            .then((res) => {
                window.alert(`Bem Vindo ${res.data.user.name}`)
                localStorage.setItem("token", res.data.token)
            })
            .catch((err) => {
                console.log('form', form)
                console.log(err)
                window.alert(`${err}`)
            })
    };
    const upDateProfile = (form,id) => {
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

    // const getRestaurantes = () => {
    //     axios.get(`${BASE_URL}/restaurants`,
    //         {
    //             headers: {
    //                 auth: localStorage.getItem("token")
    //             }
    //         }
    //     )
    //         .then((res) => {
    //             setRestaurantes(res.data)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // };
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
                console.log('res.data', res.data.restaurant)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err)
                console.log('id', id)
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
                console.log('res.data', res.data.user)
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
                window.alert(`Bem Vindo ${res.data.user.name}`)
            })
            .catch((err) => {
                console.log(err)
                window.alert("Usuario ou Senha incorreta!")
            })
    };

    const getProfileAdress = () => {
        axios.get(`${BASE_URL}/${appName}/address`,
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

     const updateProfile = (form, history) => {
       const body={
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
                // goToAddressEdit(history)
            })
            .catch((err) => {
                console.log(err)
            })
    };


    const states = {restauranteDetails,isLoading,deliveryTime,shipping,profile,orderHistory};
    const setters = {setdeliveryTime,setShipping};
    const requests = { login, signUp,getRestaurantesDetails,updateProfile,getProfileAdress,addAdress,getProfile,getOrderHistory};
    const data = { states, setters, requests };

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    );
};

export default GlobalState;
