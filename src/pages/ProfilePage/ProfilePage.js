import React, { useEffect, useState } from "react";
import BuyHistory from "../../components/BuyHistory/BuyHistory";
import Footer from "../../components/Footer/Footer";
import ProfileData from "../../components/ProfileData/ProfileData";
import useProtectedPage from "../../hooks/useProtectedPage";
import { ProfileContainer } from "./styles";

export default function ProfilePage() {
  useProtectedPage();
  useEffect(() => {
  
  }, []);

  return (
    <div>
      <ProfileContainer>
        <h3> Meu perfil </h3>
        <hr />
        <ProfileData />
        <BuyHistory />
      </ProfileContainer>
      <Footer />
    </div>
  );
}
