import React, {useState} from "react";
import Header from "../../components/Header";
import FormContainer from "../../components/FormContainer";
import {FaRegEnvelope, FaLock, FaUserAlt} from 'react-icons/fa'
import FormInput from "../../components/FormInput";
import "./styles.css";

const Cadastro = () => {
  const [enteredName, setEnteredName] = useState();
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredPassword, setEnteredPassword] = useState();

  return (
    <div className="container">
      <Header />
      <FormContainer title="Cadatro" buttonTitle="Cadastrar">
      <div className="inputRow">
          <FaUserAlt size="30" />
          <FormInput type="text" placeholder="Nome" />
        </div>
        <div className="inputRow">
          <FaRegEnvelope size="30" />
          <FormInput type="text" placeholder="Email" />
        </div>
        <div className="inputRow">
          <FaLock size="30" />
          <FormInput type="password" placeholder="Senha" />
        </div>
      </FormContainer>
    </div>
  );
};

export default Cadastro;
