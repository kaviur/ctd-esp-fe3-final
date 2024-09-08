import { createContext, useEffect, useMemo, useReducer } from "react";

export const initialState = {
  theme: localStorage.getItem("theme") || "nord", // Tema inicial
  data: [], // Datos de la API
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      localStorage.setItem("theme", action.payload);
      return { ...state, theme: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", state.theme);
  }, [state.theme]);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};