import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../context/GlobalContext";
import Swal from "sweetalert2"

const Home = () => {
  const { dentistState, themeState, sortDentistsByName, filterByCity } = useGlobalContext(); 
  const { data, filteredData, noDentistsFound } = dentistState; // Acceder a data y filteredData
  const [loading, setLoading] = useState(true); // Estado para manejar el loading

  const cities = [
    "Gwenborough", 
    "Wisokyburgh", 
    "McKenziehaven", 
    "Roscoeview", 
    "South Christy", 
    "New York", 
    "Seattle"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Cambiar el estado de loading después de 1.5 segundos
    }, 1500);

    return () => clearTimeout(timer); // Limpiar el timeout si el componente se desmonta
  }, []);

  const handleCityChange = (city) => {
    filterByCity(city);
  };

  const displayData = filteredData.length > 0 || !filteredData ? filteredData : data;

  useEffect(() => {
    if (noDentistsFound) {
        Swal.fire({
            icon: 'warning',
            title: 'No hay dentistas en esta ciudad',
            showConfirmButton: false,
            timer: 2000,
        });
    }
  },[noDentistsFound]);

  return (
    <main className={themeState.theme === "dark" ? "dark" : "light"}>
      <div className="flex flex-wrap gap-4 px-6 justify-center">
      
        <button onClick={sortDentistsByName} className="btn btn-primary">
          Ordenar por Nombre
        </button>

        <select onChange={(e) => handleCityChange(e.target.value)} className="select select-primary">
          <option value="">Selecciona una ciudad</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        {loading ? (
          Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="flex w-64 flex-col gap-4">
              <div className="skeleton h-64 w-full"></div>
              <div className="skeleton mt-6 h-6 w-28"></div>
              <div className="skeleton h-6 w-full"></div>
              <div className="skeleton h-6 w-full"></div>
            </div>
          ))
        ) : displayData.length > 0 ? (
          displayData.map((dentist) => (
            <Card
              key={dentist.id}
              name={dentist.name}
              username={dentist.username}
              id={dentist.id}
            />
          ))
        ) : (
          <p>{noDentistsMessage || "No hay dentistas para mostrar."}</p>
        )}
      </div>
    </main>
  );
};

export default Home;
