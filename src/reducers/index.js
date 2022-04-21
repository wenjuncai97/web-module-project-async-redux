import { FETCH_FOOD_SUCCESS, FETCH_FOOD_FAIL } from "../actions";

const initialState = {
    food: null,
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case(FETCH_FOOD_SUCCESS):
            return ({
                ...state,
                food: action.payload,
                isFetching: false,
            })
        case(FETCH_FOOD_FAIL):
            return ({
                ...state,
                error: action.payload,
                isFetching: false,
            })
        default:
            return state;
    }
    
}