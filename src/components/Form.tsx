import React, { useState } from "react";

const Form = () => {
  const [name, changeN] = useState("");
  const [lastName, changeLast] = useState("");
  const [age, changeA] = useState("");

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) =>
    changeN(event.target.value);

  const changeLastName = (event: React.ChangeEvent<HTMLInputElement>) =>
    changeLast(event.target.value);

  const changeAge = (event: React.ChangeEvent<HTMLInputElement>) =>
    changeA(event.target.value);

  return (
    <div>
      <form action="">
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" onChange={changeName} />
        <br />
        <label htmlFor="sobrenome">Sobrenome</label>
        <input type="text" id="sobrenome" onChange={changeLastName} />
        <br />
        <label htmlFor="idade">Idade</label>
        <input type="number" id="idade" onChange={changeAge} />
      </form>

      <p>
        Olá, {name} {lastName}, tudo bem? <br />
        Você tem {age} anos
      </p>
    </div>
  );
};

export default Form;
