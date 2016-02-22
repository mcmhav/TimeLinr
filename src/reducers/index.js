import { combineReducers } from 'redux';
import todos from './todos'
import counter from './counter'

const reducers = {
    counter,
    todos
};
module.exports = combineReducers(reducers);
