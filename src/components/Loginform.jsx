import React, { useState } from "react";
function LoginForm() {
  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");
  let im_login;
  let im_pas;
  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(im_login);
    setPassword(im_pas);
    console.log(im_login + "    " + im_pas);
  };
  return (
    <div className="sect">
      <form onSubmit={handleSubmit} className="main">
        <input
          type="text"
          placeholder="Логин"
          onChange={(e) => {
            im_login = e.target.value;
          }}
        />
        <input
          type="password"
          placeholder="Пароль"
          onChange={(e) => {
            im_pas = e.target.value;
          }}
        />
        <button type="submit">Отправить</button>
      </form>
      <h1>Ваш логин: {login}</h1>
      <h1>Ваш пароль: {password}</h1>
    </div>
  );
}
export default LoginForm;
