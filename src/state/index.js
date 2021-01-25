import { combineReducers } from 'redux';
import todos from '../todo/reducer';
import counter from '../counter/reducer';

const reducers = {
    counter,
    todos
};
module.exports = combineReducers(reducers);
