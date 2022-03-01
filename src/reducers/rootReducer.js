import { combineReducers } from 'redux';

//import { combineReducers } from 'redux-immutable';
import pokemonReducer from './pokemonReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  ui: uiReducer
});

export default rootReducer;