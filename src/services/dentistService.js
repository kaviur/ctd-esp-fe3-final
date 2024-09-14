import { getData } from './api';

// Función para obtener los dentistas y manejar el dispatch dentro de la misma función
export const fetchDentists = async (dentistDispatch) => {
  try {
    const data = await getData("/users"); 
    dentistDispatch({ type: "SET_DATA", payload: data });
  } catch (error) {
    console.error("Error fetching dentists:", error);
  }
};

// Función para obtener un dentista por ID
export const fetchDentistById = async (id) => {
    return await getData(`/users/${id}`);
  };
