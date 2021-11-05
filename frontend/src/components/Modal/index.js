import React, { useState } from "react";
import "./styles.css";
import FormInput from "../FormInput";
import PrimaryButton from "../PrimaryButton";
import CloseIcon from "../CloseIcon";

const Modal = (props) => {
  const [prodName, setProdName] = useState("");
  const [serName, setSerName] = useState("");
  const [price, setPrice] = useState("");
  const [height, setHeight] = useState("");
  const [urlImg, setUrlImg] = useState("");

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className='closeIconWrapper'><CloseIcon modalStatusHandler={props.modalStatusHandler}/></div>
        <h2 className="modalTitle">Cadastro de Produto</h2>

        <form>
        <div className="inputWrapper">
          <FormInput
            type="text"
            placeholder="Nome do Produto"
            value={prodName}
            onChange={(e) => setProdName(e.target.value)}
          />
        </div>
        <div className="inputWrapper">
          <FormInput
            type="text"
            placeholder="Nome da Série"
            value={serName}
            onChange={(e) => setSerName(e.target.value)}
          />
        </div>
        <div className="inputWrapper">
          <FormInput
            type="text"
            placeholder="Preço"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="inputWrapper">
          <FormInput
            type="text"
            placeholder="Altura"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="inputWrapper">
          <FormInput
            type="text"
            placeholder="Url da imagem"
            value={urlImg}
            onChange={(e) => setUrlImg(e.target.value)}
          />        
        </div>
        </form>
        <PrimaryButton>Cadastrar</PrimaryButton>
      </div>
    </div>
  );
};

export default Modal;
