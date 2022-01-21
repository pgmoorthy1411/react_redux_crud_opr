import { combineReducers } from 'redux';
import crudReducer from './crud/reducer';

const rootReducers = combineReducers({
    crudReducer
});

export default rootReducers;