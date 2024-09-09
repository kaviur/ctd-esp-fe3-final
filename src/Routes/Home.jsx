import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4 px-6 justify-center">
        {/* Aqui deberias renderizar las cards */}

        <div className="flex w-52 flex-col gap-4">
          <div className="skeleton h-64 w-full"></div>
          <div className="skeleton mt-6 h-6 w-28"></div>
          <div className="skeleton h-6 w-full"></div>
          <div className="skeleton h-6 w-full"></div>
        </div>


        <Card name={"juan"} username={"Este"} id={126355} />
        <Card name={"ewew"} username={"wewhh"} id={14263} />
        <Card name={"fwfwf"} username={"hghgh"} id={162553} />

      </div>
    </main>
  );
};

export default Home;
