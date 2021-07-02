import { useState } from "react";
import "./style.css";

function WelcomePage({ user, setIsLoggedIn, isLoggedIn }) {
  function HandleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <>
      <div className="welcomeDiv">Bem vindo: {user}!</div>
      <button onClick={HandleLogout}>Sair</button>
    </>
  );
}

export default WelcomePage;
