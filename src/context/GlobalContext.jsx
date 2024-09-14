// src/context/GlobalContext.js
import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { themeReducer, initialStateTheme } from '../reducers/themeReducer';
import { dentistReducer, initialStateDentist } from '../reducers/dentistReducer';
import { fetchDentists } from '../services/dentistService';


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
    fetchDentists(dentistDispatch); 
  }, [dentistDispatch]);


  const sortDentistsByName = () => {
    dentistDispatch({ type: "SORT_BY_NAME" });
  };


  const filterByCity = (city) => {
    dentistDispatch({ type: "FILTER_BY_CITY", payload: city });
  };


  const resetFilters = () => {
    dentistDispatch({ type: "RESET_FILTERS" });
  };


  // Memoizar el valor del contexto para optimizar el rendimiento
  const contextValue = useMemo(() => ({
    themeState,
    themeDispatch,
    dentistState,
    dentistDispatch,
    sortDentistsByName,
    filterByCity,
    resetFilters
  }),[themeState, dentistState]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook para utilizar el contexto
export const useGlobalContext = () => useContext(GlobalContext);
