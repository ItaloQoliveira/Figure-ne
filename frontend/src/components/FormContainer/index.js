import React from "react";
import PrimaryButton from "../PrimaryButton";
import "./styles.css";

const FormContainer = (props) => {
  return (
    <div className="formWrapper">
      <form className="formContainer">
        <h2 className="formTitle">{props.title}</h2>
        <div className="formInputs">{props.children}</div>
        <PrimaryButton onClick={props.onClick}>{props.buttonTitle}</PrimaryButton>
      </form>
    </div>
  );
};

export default FormContainer;
