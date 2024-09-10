import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Realizar el fetch para obtener los datos del usuario específico
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data); // Guardar los datos del usuario en el estado

        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        setLoading(false); // En caso de error, quitar el loading inmediatamente
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
      {/* <h1 className=" text-base-content font-bold text-2xl mb-4 text-center">Paciente con el ID: {user.id}</h1> */}
      <table className="table table-zebra w-96 mx-auto ">
        <tbody>
          <tr>
            <td className="font-bold">ID</td>
            <td>{user.id}</td>
          </tr>
          <tr>
            <td className="font-bold">Nombre</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td className="font-bold">Username</td>
            <td>{user.username}</td>
          </tr>
          <tr>
            <td className="font-bold">Email</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td className="font-bold">Teléfono</td>
            <td>{user.phone}</td>
          </tr>
          <tr>
            <td className="font-bold">Website</td>
            <td>{user.website}</td>
          </tr>
          <tr>
            <td className="font-bold">Compañia</td>
            <td>{user.company.name}</td>
          </tr>
          <tr>
            <td className="font-bold">Dirección</td>
            <td>
              {user.address.street}, {user.address.suite}, {user.address.city},{" "}
              {user.address.zipcode}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
