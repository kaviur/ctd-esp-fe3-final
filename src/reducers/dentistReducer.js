export const initialStateDentist = {
    data: [],
    orderedData: [],
    favs: JSON.parse(localStorage.getItem("favs")) || [],
    filteredData: [],
    noDentistsFound: false
};
  
export const dentistReducer = (state, action) => {
    switch (action.type) {
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

        case "SORT_BY_NAME":
            const dataToSort = state.filteredData.length > 0 ? state.filteredData : state.data;
            const sortedDentists = [...dataToSort].sort((a, b) =>
                a.name.localeCompare(b.name)
            );
            return {
                ...state,
                orderedData: sortedDentists
            };

        case "FILTER_BY_CITY":
        const filteredDentists = action.payload 
            ? state.data.filter(dentist => dentist.address?.city === action.payload)
            : state.data; // Si no hay ciudad seleccionada, mostrar todos

        // Verificar si no hay dentistas después de filtrar
        const noDentistsFound = filteredDentists.length === 0;

        return {
            ...state,
            filteredData: filteredDentists,
            noDentistsFound 
        };

        case "RESET_FILTERS":
        return {
            ...state,
            filteredData:[],
            orderedData: [],
            noDentistsFound: false
        };

        default:
        return state;
    }
};
  