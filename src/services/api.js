import axios from 'axios';

const API_URL = "https://jsonplaceholder.typicode.com";

// Crear una instancia de Axios para configurar headers o URL base si es necesario
const instance = axios.create({
  baseURL: API_URL,
  timeout: 5000, // Configura un timeout para evitar que las peticiones tarden demasiado
});

// Método genérico para obtener datos de cualquier endpoint
export const getData = async (endpoint) => {
  try {
    const response = await instance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
};
