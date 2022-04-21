import axios from 'axios';

export const FETCH_FOOD_LOADING = "FETCH_FOOD_LOADING"
export const FETCH_FOOD_SUCCESS = "FETCH_FOOD_SUCCESS"
export const FETCH_FOOD_FAIL = "FETCH_FOOD_FAIL"

export const getFood = () => dispatch => {
    dispatch({ type: FETCH_FOOD_LOADING})
    axios.get(`https://foodish-api.herokuapp.com/api/images/burger`)
    .then(res => {
        console.log(res.data)
        dispatch({type: FETCH_FOOD_SUCCESS, payload: res.data.image})
    })
    .catch(err => {
        dispatch({type: FETCH_FOOD_FAIL, payload: err.response.code})
    })
}