import {createStore ,applyMiddleware ,compose} from 'redux'

import thunk from 'redux-thunk';
import rootReducer from './reducer'

const initialState = {};

const midleWare = [thunk]

const store = createStore(
    rootReducer , initialState , 
    compose(
        applyMiddleware(...midleWare),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            )
   
)


export default store;