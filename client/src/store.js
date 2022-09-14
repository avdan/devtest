import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { getFirebase } from 'react-redux-firebase';


const initialState = {};

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const middleware = [thunk.withExtraArgument({getFirebase})];


const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
));

export default store;