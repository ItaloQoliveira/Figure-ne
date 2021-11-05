import React, {useState} from "react";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import PrimaryButton from "../../components/PrimaryButton";
import { FaPlus } from "react-icons/fa";
import "./styles.css";

const MyStore = () => {
  const [modalState, setModalState] = useState(false);
  const modalStatusHandler = (status) => {
    setModalState(status);
  }

  return (
    <div className="container">
      {modalState && <Modal modalStatusHandler={modalStatusHandler}/>}
      <Header isMyStore/>
      
      <div className="addButton">
        <PrimaryButton onClick={() => modalStatusHandler(true)}>
          <FaPlus />
        </PrimaryButton>
      </div>
    </div>
  );
};

export default MyStore;
