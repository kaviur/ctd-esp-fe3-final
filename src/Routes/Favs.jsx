import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-4 px-6 justify-center">
        {/* Aqui deberias renderizar las cards */}

        {loading ? (
          Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="flex w-64 flex-col gap-4">
              <div className="skeleton h-64 w-full"></div>
              <div className="skeleton mt-6 h-6 w-28"></div>
              <div className="skeleton h-6 w-full"></div>
              <div className="skeleton h-6 w-full"></div>
            </div>
          ))
        ) : state.favs.length > 0 ? (
          state.favs.map((dentist) => (
            <Card
              key={dentist.id}
              name={dentist.name}
              username={dentist.username}
              id={dentist.id}
            />
          ))
        ) : (
          <p>No tienes favoritos guardados.</p>
        )}
      </div>

    </>
  );
};

export default Favs;
