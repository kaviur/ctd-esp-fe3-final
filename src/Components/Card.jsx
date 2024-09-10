import React, { useContext } from "react";
import { useGlobalContext } from "../context/GlobalContext";  // Actualiza la ruta y el nombre del contexto
import { Link } from "react-router-dom";
import "../index.css";
import HeartButton from "./HeartButton";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useGlobalContext();

  const addFav = () => {
    // Crear un objeto con la información del dentista
    const dentist = { id, name, username };

    // Llamar al dispatch para agregarlo a favoritos
    dispatch({ type: "ADD_TO_FAVS", payload: dentist });
  };

  return (
    <div className="card">
      <div className="card bg-base-300 w-64 shadow-xl">
        <figure className="pt-2">
          <img
            className="w-56 h-56"
            src="https://images.vexels.com/media/users/3/309133/isolated/preview/97e3ca4eab81a1dffa2c58682690391a-un-dentista-sosteniendo-una-sonda-dental.png"
            alt="dentista"
          />
        </figure>
        <div className="card-body px-4 pt-6">
          {/* Muestra el name, username y el id */}
          <h2 className="card-title">{name}</h2>
          <p>{username}</p>
          <div className="card-actions justify-center">
            {/* Link para navegar al detalle del dentista */}
            <Link to={`/dentist/${id}`} className="btn btn-primary">
              Ver detalles
            </Link>
            {/* Botón para agregar a favoritos */}
            <button className="btn-ghost relative" onClick={addFav}>
              <HeartButton patientId={id} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
