import {
    FETCH_FOOD,
    FETCH_FOOD_SUCCESS,
    FETCH_FOOD_FAILED,
} from '../constants'

const initialState = {
    recipes: {},
    errorMessage: '',
    scrollPosition: ''
}

export default (state=initialState, action) => {
    switch (action.type) {

        case FETCH_FOOD:
            return state; 

        case FETCH_FOOD_SUCCESS:
            return {...state, recipes: action.response}; //when a successful api response is fetched, the response will be stored in 'recipes'.

        case FETCH_FOOD_FAILED:
            return {...state, errorMessage: action.error}; //when an unsuccessful api response is fetched, an error message from the api or manual error message can be set in 'errorMessage'.
            
        default:
            return state;

    }
}