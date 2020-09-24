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
            return {...state, recipes: action.response};

        case FETCH_FOOD_FAILED:
            return {...state, errorMessage: action.error};
            
        default:
            return state;

    }
}