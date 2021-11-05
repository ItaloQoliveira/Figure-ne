import React from "react";
import './styles.css'

const SecondaryButton = (props) => {
    return (
        <div onClick={props.onClick} className="buttonBox">
            {props.children}
        </div>
    )
}

export default SecondaryButton