import {combineReducers} from 'redux';
import dashboardReducer from './dashboardReducers';

//multiple reducers can be combined as per the requirements
export default combineReducers({
    recipes:dashboardReducer
})