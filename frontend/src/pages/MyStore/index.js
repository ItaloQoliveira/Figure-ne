import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import PrimaryButton from "../../components/PrimaryButton";
import { FaPlus } from "react-icons/fa";
import "./styles.css";
import FigureCard from "../../components/FigureCard";
import DeleteModal from "./DeleteModal";
import { useSelector } from "react-redux";
import fetchProducts from "../../utils/fetchProducts";

const MyStore = () => {
  const [modalState, setModalState] = useState(false);
  const [deleteModalState, setDeleteModalState] = useState(false);
  const [modalType, setModalType] = useState("");
  const [figures, setFigures] = useState([]);

  const loggedUser = useSelector((state) => state.auth.loggedUser);

  useEffect(() => {
    fetchProducts(loggedUser).then((data) => setFigures(data.figureList));
    // eslint-disable-next-line
  }, [figures]);

  const deleteModalHandler = (status) => {
    setDeleteModalState(status);
  };

  const modalStatusHandler = (status) => {
    setModalState(status);
  };

  return (
    <div className="container">
      {modalState && (
        <Modal modalStatusHandler={modalStatusHandler} modalType={modalType} />
      )}
      {deleteModalState && (
        <DeleteModal modalStatusHandler={deleteModalHandler} />
      )}
      <Header isMyStore />

      <div className="addButton">
        <PrimaryButton
          onClick={() => {
            setModalType("register");
            modalStatusHandler(true);
          }}
        >
          <FaPlus />
        </PrimaryButton>
      </div>

      <main className="mainContent">
        <div className="productsWrapper">
          {figures.map((prod) => (
            <FigureCard
              myStore
              key={prod._id}
              id={prod._id}
              name={prod.nome}
              show={prod.serie}
              price={prod.preco}
              height={prod.altura}
              picture={prod.url}
              deleteModal={deleteModalHandler}
              modalStatusHandler={modalStatusHandler}
              setModalType={setModalType}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MyStore;
