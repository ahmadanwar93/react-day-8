import { combineReducers } from "redux";
import fetchMovieDetailsReducer from "./fetchMovieDetailsReducer";

// import fetchMovieDetailsReducer from "./fetchMovieDetailsReducer";
import fetchMovieReducer from "./fetchMovieReducer";

export default combineReducers({
    movie: fetchMovieReducer,
    movieDetails: fetchMovieDetailsReducer
})