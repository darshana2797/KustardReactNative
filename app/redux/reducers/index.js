import {combineReducers} from 'redux';
import dashboardReducer from './dashboardReducers';

export default combineReducers({
    recipes:dashboardReducer
})