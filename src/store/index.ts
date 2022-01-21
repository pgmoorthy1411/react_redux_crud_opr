import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import reducers from './reducers';
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composeEnhancers = compose();

export function configureStore(initialState: any) {

    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(...middlewares)
        ),
    );
    sagaMiddleware.run(rootSaga);
    return store;
}

