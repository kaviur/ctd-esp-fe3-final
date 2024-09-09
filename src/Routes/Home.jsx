import React from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="" >
      <div className='flex flex-wrap gap-4 px-6 justify-center'>
        {/* Aqui deberias renderizar las cards */}
        <Card name={"juan"} username={"Este"} id={126355} />
        <Card name={"ewew"} username={"wewhh"} id={14263} />
        <Card name={"fwfwf"} username={"hghgh"} id={162553} />

      </div>
    </main>
  )
}


export default Home