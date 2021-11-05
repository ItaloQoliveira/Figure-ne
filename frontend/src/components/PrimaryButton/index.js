import React from "react";
import './styles.css'

const PrimaryButton = (props) => {
    return (
        <div onClick={props.onClick} className="buttonContainer">
            {props.children}
        </div>
    )
}

export default PrimaryButton