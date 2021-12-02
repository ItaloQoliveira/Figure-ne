import React from "react";
import PrimaryButton from "../../../components/PrimaryButton";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import "./styles.css";

const DeleteModal = (props) => {
  const chosedFigure = useSelector((state) => state.figure.chosedFigure);

  const deleteHandler = async () => {
    try {
      const response = await fetch("http://localhost:3003/figures", {
        method: "DELETE",
        body: JSON.stringify({ _id: chosedFigure }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast.success(`（*＾-＾*） Figure Excluído com Sucesso`);
      } else {
        toast.error(` ( •̀ ω •́ )y  Erro ao Excluir a Figure`);
      }
      props.modalStatusHandler(false)
    } catch (error) {
      console.log(error);
      props.modalStatusHandler(false)
    }
  };

  return (
    <div className="deleteModalBackground">
      <div className="deleteModalContainer">
        <p className="deleteModalText">
          Deseja realmente excluir esse produto?
        </p>
        <div className="deleteModalButtons">
          <PrimaryButton onClick={() => props.modalStatusHandler(false)}>
            Cancelar
          </PrimaryButton>
          <PrimaryButton onClick={deleteHandler}>Confirmar</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
