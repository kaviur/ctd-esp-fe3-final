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
    <div className="card">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
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
            <HeartButton patientId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
