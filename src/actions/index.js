import axios from 'axios';

export const FETCH_FOOD_SUCCESS = "FETCH_FOOD_SUCCESS"
export const FETCH_FOOD_FAIL = "FETCH_FOOD_FAIL"

export const getFood = () => dispatch => {
    axios.get(`https://foodish-api.herokuapp.com/api/`)
    .then(res => {
        console.log(res)
        dispatch({type: FETCH_FOOD_SUCCESS, payload: res.data.image})
    })
    .catch(err => {
        dispatch({type: FETCH_FOOD_FAIL, payload: err.response.code})
    })
}

export const typeOfFood = (type) => dispatch => {
    axios.get(`https://foodish-api.herokuapp.com/api/images/${type}/`)
    .then(res => {
        console.log(res.data)
        dispatch({type: FETCH_FOOD_SUCCESS, payload: type})
    })
    .catch(err => {
        dispatch({type: FETCH_FOOD_FAIL, payload: err.response.code})
    })
}