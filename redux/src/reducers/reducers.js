import userReducer from './userReducer';
import counterReducer from './counterReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    user: userReducer,
    counter: counterReducer
});
