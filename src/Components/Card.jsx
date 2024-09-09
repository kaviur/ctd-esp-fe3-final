import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";
import "../index.css";
import HeartButton from "./HeartButton";

const Card = ({ name, username, id }) => {
  const { dispatch } = useContext(ContextGlobal);

  const addFav = () => {
    // Crear un objeto con la información del dentista
    const dentist = { id, name, username };

    // Llamar al dispatch para agregarlo a favoritos
    dispatch({ type: "ADD_TO_FAVS", payload: dentist });
  };
  return (
    <div className="card ">
      <div className="card bg-base-300 w-96 shadow-xl">
        <figure>
          <img
            className="w-80"
            src="https://images.vexels.com/media/users/3/309133/isolated/preview/97e3ca4eab81a1dffa2c58682690391a-un-dentista-sosteniendo-una-sonda-dental.png"
            alt="dentista"
          />
        </figure>
        <div className="card-body">
          {/* Muestra el name, username y el id */}
          <h2 className="card-title">{name}</h2>
          <p>{username}</p>
          <div className="card-actions justify-end">
            {/* Link para navegar al detalle del dentista */}
            <Link to={`/dentist/${id}`} className="btn btn-primary">
              Ver detalles
            </Link>
            {/* Botón para agregar a favoritos */}
            <button className="btn btn-ghost relative" onClick={addFav}>
            <HeartButton  patientId={id} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
