import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../context/GlobalContext";

const Home = () => {
  // Asegúrate de acceder al estado de dentistas y al tema
  const { dentistState, themeState } = useGlobalContext(); 
  const [loading, setLoading] = useState(true); // Estado para manejar el loading

  useEffect(() => {
    // Simular una carga con un setTimeout
    const timer = setTimeout(() => {
      setLoading(false); // Cambiar el estado de loading después de 1.5 segundos
    }, 1500);

    return () => clearTimeout(timer); // Limpiar el timeout si el componente se desmonta
  }, []);

  return (
    <main className={themeState.theme === "dark" ? "dark" : "light"}>
      <div className="flex flex-wrap gap-4 px-6 justify-center">
        {/* Aquí deberías renderizar las cards */}
        {loading ? (
          Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="flex w-64 flex-col gap-4">
              <div className="skeleton h-64 w-full"></div>
              <div className="skeleton mt-6 h-6 w-28"></div>
              <div className="skeleton h-6 w-full"></div>
              <div className="skeleton h-6 w-full"></div>
            </div>
          ))
        ) : dentistState.data.length > 0 ? (
          dentistState.data.map((dentist) => (
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
