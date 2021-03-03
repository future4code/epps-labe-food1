import React, { useState } from "react";
import axios from "axios";
import GlobalStateContext from "../context/GlobalStateContext";
import { BASE_URL } from '../constants/baseUrl'

const GlobalState = (props) => {
    const [restaurantes, setRestaurantes] = useState([])
    const [restauranteDetails, setRestauranteDetails] = useState([])
    const [profile, setProfile] = useState([])
    const [profileAdress, setProfileAdress] = useState([])

    const login = (form) => {
        axios.post(`${BASE_URL}/login`, form)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                window.alert(`Bem Vindo ${res.data.user.name}`)
            })
            .catch((err) => {
                console.log(err)
                window.alert("Usuario ou Senha incorreta!")
            })
    };

    const signUp = (form) => {
        axios.post(`${BASE_URL}/signup`, form)
            .then((res) => {
                window.alert(`Bem Vindo ${res.data.user.name}`)
                localStorage.setItem("token", res.data.token)
            })
            .catch((err) => {
                console.log(err)
                window.alert("Usuario ou Senha incorreta!")
            })
    };
    const upDateProfile = (form,id) => {
        axios.post(`${BASE_URL}/restaurants/${id}/order`, form)
            .then((res) => {
                window.alert(`Bem Vindo ${res.data.user.name}`)
                localStorage.setItem("token", res.data.token)
            })
            .catch((err) => {
                console.log(err)
                window.alert("Usuario ou Senha incorreta!")
            })
    };

    const getRestaurantes = () => {
        axios.get(`${BASE_URL}/restaurants`,
            {
                headers: {
                    Authorization: localStorage.getItem("token")
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
    const getOrder = () => {
        axios.get(`${BASE_URL}/orders/history`,
            {
                headers: {
                    Authorization: localStorage.getItem("token")
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
        axios.get(`${BASE_URL}/active-order`,
            {
                headers: {
                    Authorization: localStorage.getItem("token")
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
    const getRestaurantesDetails = (id) => {
        axios.get(`${BASE_URL}/restaurants${id}`,
            {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }
        )
            .then((res) => {
                setRestauranteDetails(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    };
    const getProfile = (id) => {
        axios.get(`${BASE_URL}/profile`,
            {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }
        )
            .then((res) => {
                setProfile(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    };
    const addAdress = (form) => {
        axios.put(`${BASE_URL}/address`, form,
            {
                headers: {
                    Authorization: localStorage.getItem("token")
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

    const getProfileAdress = (id) => {
        axios.get(`${BASE_URL}/profile/address`,
            {
                headers: {
                    Authorization: localStorage.getItem("token")
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

    const updateProfile = (id) => {
        axios.put(`${BASE_URL}/profile`,
            {
                headers: {
                    Authorization: localStorage.getItem("token")
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

    //   const getPostList = () => {
    //     axios.get(`${baseUrl}/posts`,
    //     {
    //       headers: {
    //         Authorization: localStorage.getItem("token")
    //       }
    //     }
    //     )
    //     .then((res) => {
    //       setPostList(res.data.posts)
    //      })
    //     .catch((err) => {
    //       console.log(err)
    //       })
    //   };



    const states = {};
    const setters = {};
    const requests = { login, signUp };
    const data = { states, setters, requests };

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    );
};

export default GlobalState;
