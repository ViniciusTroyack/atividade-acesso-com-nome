import { useState } from "react";
import "./style.css";

function GetUserComponent({ setUser, setIsLoggedIn }) {
  const [userInput, setUserInput] = useState("");

  const HandleLogin = (userInput) => {
    setUser(userInput);
    setIsLoggedIn(true);
  };

  return (
    <>
      <form>
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          placeholder="Digite seu Usuario"
        />
      </form>
      <button onClick={() => HandleLogin(userInput)}>Acessar com o nome</button>
    </>
  );
}

export default GetUserComponent;
