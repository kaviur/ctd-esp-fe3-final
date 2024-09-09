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
    <div className="flex flex-wrap gap-4 px-6 justify-center">
      {/* Aqui deberias renderizar las cards */}
      <Card name={"juan"} username={"Este"} id={126355} />
      <Card name={"ewew"} username={"wewhh"} id={14263} />
      <Card name={"fwfwf"} username={"hghgh"} id={162553} />
    </div>
  );
};

export default Favs;
