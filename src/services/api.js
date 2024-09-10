import axios from 'axios';

const API_URL = "https://jsonplaceholder.typicode.com";

// Crear una instancia de Axios para configurar headers o URL base si es necesario
const api = axios.create({
  baseURL: API_URL,
  timeout: 5000, // Configura un timeout para evitar que las peticiones tarden demasiado
});

// Manejar el GET de usuarios
export const getUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
