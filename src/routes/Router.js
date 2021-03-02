import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import FirstScreen from "../pages/FirstScreen/FirstScreen";
import Feed from "../pages/Feed/Feed";
import Login from "../pages/Login/Login";
import AdressRegister from "../pages/AdressResgister/AdressRegister";
import SignUp from "../pages/SignUp/SignUp";
import BuyCart from "../pages/BuyCart/BuyCart";
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import Error from "../pages/Error/Error";
import GlobalState from "../global/globalState";


export default function Router() {
  return (
    <GlobalState>
      <BrowserRouter>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/">
            <FirstScreen />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/adress-register">
            <AdressRegister />
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
          <Route exact path="/feed">
            <Feed />
          </Route>
          <Route exact path="/cart">
            <BuyCart />
          </Route>
          <Route exact path="/restaurants/:restaurantId">
            <RestaurantPage />
          </Route>
          <Route exact path="/profile">
            <ProfilePage />
          </Route>
          <Route >
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </GlobalState>
  );
}
