import React, { useEffect, useState } from "react";
import "./styles.css";
import FormInput from "../FormInput";
import PrimaryButton from "../PrimaryButton";
import CloseIcon from "../CloseIcon";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import fetchProducts from "../../utils/fetchProducts";

const Modal = (props) => {
  const [prodName, setProdName] = useState("");
  const [serName, setSerName] = useState("");
  const [price, setPrice] = useState("");
  const [height, setHeight] = useState("");
  const [urlImg, setUrlImg] = useState("");

  const loggedUser = useSelector((state) => state.auth.loggedUser);
  const chosedFigure = useSelector(state => state.figure.chosedFigure);

  useEffect(() => {
    if(props.modalType === 'edit'){
      fetchProducts(loggedUser).then(data => {
        data.figureList.forEach(figure => {
          if(figure._id === chosedFigure){
            setProdName(figure.nome);
            setSerName(figure.serie);
            setPrice(figure.preco);
            setHeight(figure.altura);
            setUrlImg(figure.url);
          }
        })
      })
    }
    // eslint-disable-next-line
  },[])

  const prodAddHandler = async () => {
    try {
      const response = await fetch("http://localhost:3003/figures", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          nome: prodName,
          serie: serName,
          preco: price,
          altura: height,
          url: urlImg,
          email: loggedUser,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("（*＾-＾*） Produto cadastrado com sucesso ");
        props.modalStatusHandler(false);
      } else {
        toast.error(` ( •̀ ω •́ )y  ${data.error}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const prodEditHandler = async() => {
    try {
      const response = await fetch("http://localhost:3003/figures", {
        method: "PUT",
        mode: "cors",
        body: JSON.stringify({
          nome: prodName,
          serie: serName,
          preco: price,
          altura: height,
          url: urlImg,
          _id: chosedFigure,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });


      if (response.ok) {
        toast.success(`（*＾-＾*） Figure alterada com sucesso `);
        props.modalStatusHandler(false);
      } else {
        toast.error(` ( •̀ ω •́ )y  Erro ao alterar a Figure`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="closeIconWrapper">
          <CloseIcon modalStatusHandler={props.modalStatusHandler} />
        </div>
        {props.modalType === 'register' && <h2 className="modalTitle">Cadastro de Produto</h2>}
        {props.modalType === 'edit' && <h2 className="modalTitle">Alterar Produto</h2>}

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
              placeholder="Altura (cm)"
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
        {props.modalType === 'register' && <PrimaryButton onClick={prodAddHandler}>Cadastrar</PrimaryButton>}
        {props.modalType === 'edit' && <PrimaryButton onClick={prodEditHandler}>Alterar</PrimaryButton>}
      </div>
    </div>
  );
};

export default Modal;
