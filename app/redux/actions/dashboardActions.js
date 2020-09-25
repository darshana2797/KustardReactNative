import {
    FETCH_FOOD,
    FETCH_FOOD_SUCCESS,
    FETCH_FOOD_FAILED
} from '../constants';

export const fetchFood = () => {
    return{
        type:FETCH_FOOD,
    }
}

//dispatched on successful API response
export const fetchFoodSuccess = (response) => {
    return{
        type:FETCH_FOOD_SUCCESS,
        response
    }
}

//dispatched on unsuccessful API response
export const fetchFoodFailed = (error) => {
    return{
        type:FETCH_FOOD_FAILED,
        error
    }
}