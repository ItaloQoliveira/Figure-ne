import React, { useState } from "react";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import FormContainer from "../../components/FormContainer";
import { FaRegEnvelope, FaLock, FaUserAlt } from "react-icons/fa";
import FormInput from "../../components/FormInput";
import "./styles.css";
import { toast } from "react-toastify";

const Cadastro = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const history = useHistory();

  const registerHandler = async () => {
    try {
      const response = await fetch("http://localhost:3003/users/create", {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify({
          usuario: enteredName,
          email: enteredEmail,
          password: enteredPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("（*＾-＾*） Conta criada com sucesso ");
        history.push("/login");
      } else {
        toast.error(` ( •̀ ω •́ )y ${data.error}`)
      }

    } catch (error) {
      console.log(error)
    }
  };
  
  return (
    <div className="container">
      <Header />
      <FormContainer
        title="Cadatro"
        buttonTitle="Cadastrar"
        onClick={registerHandler}
      >
        <div className="inputRow">
          <FaUserAlt size="30" />
          <FormInput
            type="text"
            placeholder="Nome"
            value={enteredName}
            onChange={(e) => setEnteredName(e.target.value)}
          />
        </div>
        <div className="inputRow">
          <FaRegEnvelope size="30" />
          <FormInput
            type="text"
            placeholder="Email"
            value={enteredEmail}
            onChange={(e) => setEnteredEmail(e.target.value)}
          />
        </div>
        <div className="inputRow">
          <FaLock size="30" />
          <FormInput
            type="password"
            placeholder="Senha"
            rvalue={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
          />
        </div>
      </FormContainer>
    </div>
  );
};

export default Cadastro;
