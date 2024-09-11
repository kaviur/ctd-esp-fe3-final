export const initialStateDentist = {
    data: [],
    favs: JSON.parse(localStorage.getItem("favs")) || [],
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
        
        default:
        return state;
    }
};
  