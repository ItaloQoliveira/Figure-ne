import React from "react";
import './styles.css'

const PrimaryButton = (props) => {
    return (
        <div className="buttonContainer">
            {props.title}
        </div>
    )
}

export default PrimaryButton