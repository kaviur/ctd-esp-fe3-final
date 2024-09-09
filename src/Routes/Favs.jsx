import React from "react";
import Card from "../Components/Card";

import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const DentistCard = ({ dentist }) => {
  const { dispatch } = useContext(ContextGlobal);

  const handleAddToFavs = () => {
    dispatch({ type: "ADD_TO_FAVS", payload: dentist });
  };
};


const Favs = () => {

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
