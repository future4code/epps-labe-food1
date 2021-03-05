import React, { useState, useEffect, useContext } from "react";
import MediaCardFeed from "../../components/Feed/MediaCardFeed";
import axios from "axios";
import { BASE_URL, appName } from "../../constants/baseUrl";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { TextField } from "@material-ui/core";
import { NavBar } from "../../components/Feed/style";
import Loading from "../../assets/loading.gif";
import GlobalStateContext from "../../context/GlobalStateContext";
import { goToRestaurantPage } from "../../routes/Coordinator";

export default function Feed() {
  const [restaurants, setRestaurants] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { states, requests, setters } = useContext(GlobalStateContext);
  const history = useHistory();
  useProtectedPage();

  useEffect(() => {
    getRestaurants();
    requests.getProfileAdress()
  }, []);

  const getRestaurants = () => {
    const token = localStorage.getItem("token")

    setIsLoading(true);
    axios
      .get(`${BASE_URL}/${appName}/restaurants`, { headers: { auth: token } })
      .then((res) => {
        console.log(res.data.restaurants);
        setRestaurants(res.data.restaurants);
        setIsLoading(false);
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
  const showPage = () => {
    return (

      filterFeed().length > 0 ? filterFeed().map((restaurant) => {
        return (
          <div onClick={() => { requests.getRestaurantesDetails(restaurant.id) || history.push(`/restaurants/${restaurant.id}`) || setters.setdeliveryTime(restaurant.deliveryTime) || setters.setShipping(restaurant.shipping) }}>
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
        )
      }) :
        < div style={{ display: "flex", justifyContent: "center", margin: "2rem" }} >
          Nenhum resultado encontrado.
        </div >
    )
  };


  return (
    <div style={{ paddingBottom: '15%' }}>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <TextField
          variant="outlined"
          onChange={onChangeInputTitle}
          value={inputTitle}
          placeholder="Restaurante"
          style={{ minWidth: "350px" }}
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
      {isLoading && <img style={{ margin: "0 47%" }} src={Loading} />}
      {showPage()}
      <Footer />
    </div>
  );
}
