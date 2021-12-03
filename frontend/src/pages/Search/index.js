import React from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import FigureCard from "../../components/FigureCard";

const Search = () => {
  const searchedData = useSelector((state) => state.figure.searchedData);

  return (
    <div className="container">
      <Header />
      <main className="mainContent">
      <div className="productsWrapper">
        {searchedData.map((prod) => (
          <FigureCard
            key={prod._id}
            id={prod._id}
            name={prod.nome}
            show={prod.serie}
            price={prod.preco}
            height={prod.altura}
            picture={prod.url}
          />
        ))}
      </div>
      </main>
    </div>
  );
};

export default Search;