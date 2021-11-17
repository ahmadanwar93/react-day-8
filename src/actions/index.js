import { FETCH_MOVIE, FETCH_MOVIE_DETAILS, FETCH_MOVIE_DETAILS_FAIL, FETCH_MOVIE_DETAILS_SUCCESS, FETCH_MOVIE_FAIL, FETCH_MOVIE_SUCCESS } from "../types"
import axios from "axios"

export const fetchMovie = (data) => (dispatch) =>{
    // data is the parameter kita search
    dispatch({
        type: FETCH_MOVIE,
        payload: data,
    })

    try {
        axios.get(`http://www.omdbapi.com/?apikey=9c37fa59&s=${data}&page=1`).then((res)=>{
            console.log('res...',res)
            if (res.status === 200 && res.data.Response === "True"){
                dispatch({
                    type: FETCH_MOVIE_SUCCESS,
                    payload: res.data
                })
            }else{
                alert(res.data.Error)
            }
        })
        .catch((error)=>{
            console.log('error....1', error.response.data.Error);
            dispatch ({
                type: FETCH_MOVIE_FAIL,
                error: error.response.data.Error,
            })
        })
    }catch(error){
        console.log('error....2' ,error);
        dispatch({
            type: FETCH_MOVIE_FAIL,
            error: error.response.data.Error
        })
    }

}


export const fetchMovieDetails = (data) => (dispatch) => {
    dispatch ({
        type: FETCH_MOVIE_DETAILS
    })


    try {
        axios.get(`http://www.omdbapi.com/?apikey=9c37fa59&i=${data}`)
        .then((res) => {
            if(res.status === 200){
                // console.log('res')
                dispatch({
                    type:FETCH_MOVIE_DETAILS_SUCCESS,
                    payload: res.data
                })
            }
        })
        .catch((error) => {
            console.log('error', error);
            dispatch({
                type:FETCH_MOVIE_DETAILS_FAIL,
                error: error.response.data
            })
        })

    }catch(error){
        console.log('error2...',error);
        dispatch({
            type:FETCH_MOVIE_DETAILS_FAIL,
            error: error.response.data
        })
    }
}