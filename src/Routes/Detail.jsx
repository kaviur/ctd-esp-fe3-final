import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getData} from '../services/api';
import UserDetails from "../Components/UserDetails";
// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData(`/users/${id}`)
      .then((data) => {
        setUser(data);  
        setTimeout(() => {
          setLoading(false);
        }, 2000);  // Simular un delay
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        setLoading(false);  // En caso de error, quitar el loading inmediatamente
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex mt-2 w-96 flex-col gap-2 text-center mx-auto">
        <div className="skeleton h-10 w-full"></div>
        <div className="skeleton h-10 w-full"></div>
        <div className="skeleton h-10 w-full"></div>
        <div className="skeleton h-10 w-full"></div>
        <div className="skeleton h-10 w-full"></div>
        <div className="skeleton h-10 w-full"></div>
        <div className="skeleton h-10 w-full"></div>
        <div className="skeleton h-10 w-full"></div>
      </div>
    );
  }

  // Si no se encuentra el usuario, mostrar un mensaje de error
  if (!user) {
    return <p>Error: Usuario no encontrado</p>;
  }

  return (
    <div className="overflow-x-auto flex gap-2">
      <UserDetails user={user} />
    </div>
  );
};

export default Detail;
