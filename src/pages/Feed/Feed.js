import React, { useState, useEffect } from "react";
import MediaCardFeed from "../../components/Feed/MediaCardFeed";
import axios from "axios";
import { BASE_URL, appName } from "../../constants/baseUrl";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { TextField } from "@material-ui/core";
import { NavBar } from "../../components/Feed/style";

export default function Feed() {
  const [restaurants, setRestaurants] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const history = useHistory();

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InFHbEpCUzdVb0VZVk1peWdUR05LIiwibmFtZSI6Ikp1bGlhbmEiLCJlbWFpbCI6Imp1bGlhbmEtcGVkcm9zb0BnbWFpbC5jb20iLCJjcGYiOiIyMjIuMjIyLjIyMi0yMiIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBbG1pcmFudGUsIDIzLCAxMyAtIEJ1dGFudMOjIiwiaWF0IjoxNjE0Njk3NzgxfQ.DGrIMwdbFy9686I0aUOAIJODbfYLEyNih_MvyjRbpj0";

    axios
      .get(`${BASE_URL}/${appName}/restaurants`, { headers: { auth: token } })
      .then((res) => {
        console.log(res.data.restaurants);
        setRestaurants(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err.res);
      });
  };

  const onChangeInputTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const filterFeed = () => {
    return restaurants.filter((restaurant) => {
      const title = restaurant.name.toLowerCase();
      return title.indexOf(inputTitle.toLowerCase()) > -1;
    });
  };

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
      >
        <TextField
          variant="outlined"
          onChange={onChangeInputTitle}
          value={inputTitle}
          placeholder="Restaurante"
          style={{ minWidth: "27vw" }}
        />
      </div>

      <h1 align="center">Restaurantes</h1>
      <NavBar>
        <ul>
          <li>
            <a href="">Burger</a>
          </li>
          <li>
            <a href="">Asiática</a>
          </li>
          <li>
            <a href="">Massas</a>
          </li>
          <li>
            <a href="">Saudáveis</a>
          </li>
        </ul>
      </NavBar>
      {filterFeed().map((restaurant) => {
        return (
          <div>
            <MediaCardFeed
              key={restaurant.id}
              category={restaurant.category}
              logoUrl={restaurant.logoUrl}
              name={restaurant.name}
              deliveryTime={restaurant.deliveryTime}
              shipping={restaurant.shipping}
            ></MediaCardFeed>
            <br />
          </div>
        );
      })}
      {/* <Footer /> */}
    </>
  );
}
