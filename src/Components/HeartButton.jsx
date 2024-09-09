
import React, { useState, useEffect } from 'react';
import "../heart.css"

const HeartButton = ({ patientId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Recuperar el objeto de favoritos desde localStorage al montar el componente
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    if (favorites[patientId]) {
      setIsFavorite(true);
    }
  }, [patientId]);

  // Función para manejar el clic y actualizar el objeto de favoritos en localStorage
  const handleClick = (e) => {
    e.preventDefault();
    const newFavoriteState = !isFavorite;
    setIsFavorite(newFavoriteState);

    // Obtener el objeto de favoritos desde localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    // Actualizar el estado del paciente en el objeto
    favorites[patientId] = newFavoriteState;
    // Guardar el objeto actualizado en localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  return (
    <a
      href="#"
      className={isFavorite ? 'favorite' : ''}
      onClick={handleClick}
    >
      <span className="favorite-trigger">❤</span>
    </a>
  );
};

export default HeartButton;
