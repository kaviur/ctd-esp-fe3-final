import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../context/GlobalContext";
import toast from "react-hot-toast";

const Home = () => {
  const { dentistState, themeState, sortDentistsByName, filterByCity } = useGlobalContext(); 
  const { data, filteredData, noDentistsFound } = dentistState; 
  const [loading, setLoading] = useState(true); 

  const cities = [
    "Gwenborough", 
    "Wisokyburgh", 
    "McKenziehaven", 
    "Roscoeview", 
    "South Christy", 
    "New York", 
    "Seattle"
  ];
  const notify = () => toast('Here is your toast.');
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1500);

    return () => clearTimeout(timer); 
  }, []);

  const handleCityChange = (city) => {
    filterByCity(city);
  };

  const displayData = filteredData.length > 0 || !filteredData ? filteredData : data;


  return (
    <main className={themeState.theme === "dark" ? "dark" : "light"}>
      <div className="flex justify-center gap-4 mb-5">
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
      </div>
 
      <div className="flex flex-wrap gap-4 px-6 justify-center">
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
          <p>No hay dentistas para mostrar.</p>
        )}
      </div>
    </main>
  );
};

export default Home;

