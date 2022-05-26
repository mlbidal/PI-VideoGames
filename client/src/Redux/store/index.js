//el store tiene toda la info de mi app, el store no se modifica de forma directa
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)) //Thunk es un middleware que le permite invocar creadores de acciones que devuelven una función en vez de un objeto de acción
);

export default store;