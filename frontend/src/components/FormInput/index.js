import React from "react";
import './styles.css'

const FormInput = (props) => {
  return (
      <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
  );
};

export default FormInput;
