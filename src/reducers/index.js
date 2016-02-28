import { combineReducers } from 'redux';
import todos from '../state/todo/reducer'
import counter from '../state/counter/reducer'

const reducers = {
    counter,
    todos
};
module.exports = combineReducers(reducers);
