import React from "react";
import "./styles.css";
import CloseIcon from "../CloseIcon";

const ProductModal = (props) => {
  const modalStatusHandler = () => {
    props.setProdModalState(false);
  };

  return (
    <div className="prodModalBackground">
      <div className="prodModalContainer">
        <div className="prodCloseIconWrapper">
          <CloseIcon modalStatusHandler={modalStatusHandler} />
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
