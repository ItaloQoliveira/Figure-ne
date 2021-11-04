import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import FormContainer from "../../components/FormContainer";
import Header from "../../components/Header";
import "./styles.css";
import { FaRegEnvelope, FaLock } from "react-icons/fa";
import FormInput from "../../components/FormInput";
import { toast } from "react-toastify";

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const history = useHistory();

  const loginHandler = async () => {
    try {
      const response = await fetch("http://localhost:3003/users/auth", {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      
      if (response.ok) {
        toast.success("(✿◡‿◡) Usuário logado! ");
      } else {
        const data = await response.json();
        toast.error(` ( •̀ ω •́ )y ${data.error}`)
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="container">
      <Header />
      <FormContainer title="Login" buttonTitle="Entrar" onClick={loginHandler}>
        <div className="inputRow">
          <FaRegEnvelope size="30" />
          <FormInput type="text" placeholder="Email" value={enteredEmail} onChange={e => setEnteredEmail(e.target.value)}/>
        </div>
        <div className="inputRow">
          <FaLock size="30" />
          <FormInput type="password" placeholder="Senha" value={enteredPassword} onChange={e => setEnteredPassword(e.target.value)}/>
        </div>
      </FormContainer>
    </div>
  );
};

export default Login;
