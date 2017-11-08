import {combineReducers} from 'redux';


const value = (store, action, root) => {
  if (action.type === 'INC_COUNTER') {
    return store = root.random[root.counter]
  }
  return store || 0;
};

const counter = (store, action, root) => {
if (action.type === 'INC_COUNTER') {
  return store = store + 1
} 
  return store || 0;
};

const random = (store, action) => {
  
  return store || [];
};


export default (store = {}, action) => {
  return {
    counter: counter(store.counter, action, store),
    value: value(store.value, action, store),
    random: random(store.random, action, store),
  };
};
