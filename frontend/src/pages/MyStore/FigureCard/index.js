import React from "react";
import "./styles.css";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { choseFigure } from "../../../store";

const FigureCard = (props) => {
  const dispatch = useDispatch();

  const pricePresentation = (figurePrice) => {
    let stringPrice = String(figurePrice);
    let price = stringPrice.replace(".", ",");

    if (/,/.test(price)) {
      if (/,\d$/.test(price)) {
        return price + "0";
      }
    } else {
      return price + ",00";
    }

    return price;
  };

  return (
    <div className="cardWrapper">
        <FaEdit className="editIcon" size={20} onClick={() => {
          dispatch(choseFigure(props.id))
          props.setModalType('edit');
          props.modalStatusHandler(true);
        }}/>
        <FaRegTrashAlt className="deleteIcon" size={20} onClick={() => {
          dispatch(choseFigure(props.id))
          props.deleteModal(true)
        }}/>
      <div className="cardImage">
        <img src={props.picture} alt="" />
      </div>
      <div className="cardInfo">
        <p className="cardName">Figure {props.name}</p>
        <p className="cardPrice">R$ {pricePresentation(props.price)}</p>
      </div>
    </div>
  );
};

export default FigureCard;
