import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { appName, BASE_URL } from "../constants/baseUrl";
import GlobalStateContext from "../context/GlobalStateContext";
import { goToLogin, goToFeed, goToAdressRegister } from "../routes/Coordinator";

const useProtectedPage = () => {
  const history = useHistory();

  const getProfile = () => {
    axios.get(`${BASE_URL}/${appName}/profile`,
      {
        headers: {
          auth: localStorage.getItem("token")
        }
      }
    )
      .then((res) => {
        switch (history.location.pathname) {
          case '/login':
            if (res.data.user.hasAddress) {
              goToFeed(history)
            } else {
              goToAdressRegister(history)
            }
            break;
          case '/sign-up':
            if (res.data.user.hasAddress) {
              goToFeed(history)
            } else {
              goToAdressRegister(history)
            }
            break;

          default:
            break;
        }

      })
      .catch((err) => {
        console.log(err)
      })
  };


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getProfile()
    } else {
      goToLogin(history)
    }
  }, [history]);
}

export default useProtectedPage;
