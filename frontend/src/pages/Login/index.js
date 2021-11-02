import React from "react";
import FormContainer from '../../components/FormContainer';
import Header from '../../components/Header';
import './styles.css'
import {FaRegEnvelope, FaLock} from 'react-icons/fa'
import FormInput from "../../components/FormInput";

const Login = () => {
    return (
        <div className="container">
            <Header/>
            <FormContainer title="Login" buttonTitle="Entrar">
                <div className="inputRow">
                    <FaRegEnvelope size="30"/>
                    <FormInput type="text" placeholder="Email" />
                </div>
                <div className="inputRow">
                    <FaLock size="30"/>
                    <FormInput type="password" placeholder="Senha" />
                </div>
            </FormContainer>
        </div>
    )
}

export default Login;