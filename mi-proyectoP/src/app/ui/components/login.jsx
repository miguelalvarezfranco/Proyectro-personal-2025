/*
handleSubmit es la función que se ejecuta cuando el usuario envía el formulario.
e.preventDefault() evita que el formulario se recargue al enviar (lo cual es el comportamiento predeterminado en HTML).
Los console.log son solo un ejemplo, mostrando el email y password ingresados. En un proyecto real, aquí podrías llamar a una API para autenticar al usuario.
*/ 

import React, { useState } from "react";
import "./LoginUser.css"; // Importa el archivo CSS

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h2 className="login-title">Login</h2>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Introduce tu email"
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Introduce tu password"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

