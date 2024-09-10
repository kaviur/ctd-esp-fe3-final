// src/context/GlobalContext.js
import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { getUsers } from '../services/api';


export const initialState = {
  theme: localStorage.getItem("theme") || "nord",
  data: [],
  favs: JSON.parse(localStorage.getItem("favs")) || [],
};


const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      localStorage.setItem("theme", action.payload);
      return { ...state, theme: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
      case "TOGGLE_FAV":
        const isFavorite = state.favs.some(fav => fav.id === action.payload.id);
        const updatedFavs = isFavorite
          ? state.favs.filter(fav => fav.id !== action.payload.id)  // Eliminar de favoritos
          : [...state.favs, action.payload];  // Agregar a favoritos
  
        localStorage.setItem("favs", JSON.stringify(updatedFavs));
        return { ...state, favs: updatedFavs };
    case "SET_FAVORITES":
      return { ...state, favs: action.payload };
    default:
      return state;
  }
};


const GlobalContext = createContext(undefined);


export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Aplicar el tema al cargar el estado
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", state.theme);
  }, [state.theme]);

  // Cargar datos de la API al montar el componente
  useEffect(() => {
    (async () => {
      try {
        const data = await getUsers();  // Llamada directa a la API usando Axios
        dispatch({ type: "SET_DATA", payload: data });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  // Cargar favoritos desde localStorage al montar el componente
  useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    dispatch({ type: "SET_FAVORITES", payload: savedFavs });
  }, []);

  // Memoizar el valor del contexto para optimizar el rendimiento
  const contextValue = useMemo(() => ({
    state,
    dispatch,
  }), [state]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook para utilizar el contexto
export const useGlobalContext = () => useContext(GlobalContext);
