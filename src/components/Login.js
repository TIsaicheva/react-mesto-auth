import React from "react";
import { useHistory } from "react-router-dom";
import * as auth from "../utils/auth";
import Header from "./Header";

function Login({ onLogin }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState('');
  const history = useHistory();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    auth.login(email, password).then((res) => {      
      if (res) {
        onLogin();
        history.push("/");
      }
    }).catch((err) => {
      setError(err.message);
    });
  }

  return (
    <>
      <Header
        email=""
        onClick={() => {
          history.push("/sign-up");
        }}
        menuText="Регистрация"
      />
      <div className="popup__container popup__container_dark_theme">
        <h2 className="popup__title popup__title_dark_theme">Вход</h2>
        <form
          className="popup__form"
          name="signinForm"
          noValidate
          onSubmit={handleSubmit}
        >
          <input
            className="popup__input popup__input_dark_theme popup__input_email"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            minLength="2"
            maxLength="40"
            required
            value={email}
            onChange={handleEmailChange}
          />
          <input
            className="popup__input popup__input_dark_theme popup__input_password"
            id="password"
            type="password"
            placeholder="Пароль"
            name="password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <span className={`popup__form-error ${ error && 'popup__form-error_visible'}`} id="signinForm-error">{error}</span>
          <button
            type="submit"
            className="popup__submit popup__submit_dark_theme"
          >
            Войти
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
