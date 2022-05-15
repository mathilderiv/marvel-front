import { useState, useEffect } from "react";
import axios from "axios";

import "../App.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");

  //gestion des erreur - 0 aucune erreur, 1 champ vide, 2 mots de passe non identiques, 3 email déjà enregistré, 4 username déjà enregistré
  // const [error, setError] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setError(0);

    if (email && username && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          const response = await axios.post("http://localhost:4000/signin", {
            email,
            username,
            password,
          });
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      } else {
        <p>Les deux mots de passe de correspondent pas !</p>;
      }
    } else {
      <p>Vous devez remplir tous les champs ! </p>;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="spiderman@gmail.com"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <input
          type="text"
          name="username"
          placeholder="Spider Man"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Araignée2022"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          type="password"
          name="confirm-password"
          placeholder="Araignée2022"
          onChange={(event) => {
            setConfirmpassword(event.target.value);
          }}
        />

        <button type="submit">Créer mon compte</button>
      </form>
    </div>
  );
};

export default Signin;
