import React from "react";
import "./styles.css";
import {FaTimes} from 'react-icons/fa';

function CloseIcon(props) {
  return <div className="iconContainer" onClick={() => props.modalStatusHandler(false)}><FaTimes size='24' color='#354A54'/></div>;
}

export default CloseIcon;
