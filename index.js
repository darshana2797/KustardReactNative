/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import reducer from './app/redux/reducers';
import createSagaMiddleware from 'redux-saga';
import fetchFoodSaga from './app/redux/sagas/dashboardSagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(fetchFoodSaga)
const MyApp = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => MyApp);
