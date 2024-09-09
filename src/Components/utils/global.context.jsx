  import { createContext, useEffect, useMemo, useReducer } from "react";

  export const initialState = {
    theme: localStorage.getItem("theme") || "nord", // Tema inicial
    data: [], // Datos de la API
    favs: JSON.parse(localStorage.getItem("favs")) || [], // Lista de dentistas favoritos

  };


  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_THEME":
        localStorage.setItem("theme", action.payload);
        return { ...state, theme: action.payload };
      case "SET_DATA":
        return { ...state, data: action.payload };
      case "ADD_TO_FAVS":
        const updatedFavs = [...state.favs, action.payload];
        localStorage.setItem("favs", JSON.stringify(updatedFavs));

        return { ...state, favs: updatedFavs };
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

    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "SET_DATA", payload: data });
      })
      .catch(error => console.error(error));
  }, []);

    const contextValue = useMemo(() => {
      return { state, dispatch };
    }, [state]);

    return (
      <ContextGlobal.Provider value={contextValue}>
        {children}
      </ContextGlobal.Provider>
    );
  };