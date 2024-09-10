// src/context/GlobalContext.js
import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { getUsers } from '../services/api';
import { themeReducer, initialStateTheme } from '../reducers/themeReducer';
import { dentistReducer, initialStateDentist } from '../reducers/dentistReducer';


const GlobalContext = createContext(undefined);


export const GlobalProvider = ({ children }) => {

  const [themeState, themeDispatch] = useReducer(themeReducer, initialStateTheme);
  const [dentistState, dentistDispatch] = useReducer(dentistReducer, initialStateDentist);

  // Aplicar el tema al cargar el estado
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeState.theme);
  },[themeState.theme]);

  // Cargar datos de la API al montar el componente
  useEffect(() => {
    (async () => {
      try {
        const data = await getUsers();  // Llamada a la API para obtener dentistas
        dentistDispatch({ type: "SET_DATA", payload: data });
      } catch (error) {
        console.error(error);
      }
    })();
  },[]);


  // Memoizar el valor del contexto para optimizar el rendimiento
  const contextValue = useMemo(() => ({
    themeState,
    themeDispatch,
    dentistState,
    dentistDispatch,
  }),[themeState, dentistState]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook para utilizar el contexto
export const useGlobalContext = () => useContext(GlobalContext);
