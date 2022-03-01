import {fromJS} from 'immutable';

import {
  SET_POKEMON,
  // SET_ERROR,
  // CLEAR_ERROR,
  // TOGGLE_LOADER,
  SET_FAVORITE
} from "../actions/types";

// const initialState = fromJS({
//   list:[],
//   error: '',
//   loading: false,
// });

const initialState = {
  list:[],
//  error: '',
//  loading: false,
};

const pokemonReducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_POKEMON:
      return {...state,list: action.payload};
      //return state.set('list',fromJS(action.payload));
    // case SET_ERROR:
    //   return { ...state, error: action.payload.message };
    // case CLEAR_ERROR:
    //   return { ...state, error: '' };      
    // case TOGGLE_LOADER:
    //   return {...state, loading: !state.loading };
    case SET_FAVORITE:
      const newPokemonList = [...state.list];
      const currentPokemonIndex = newPokemonList.findIndex((elem) => elem.id===action.payload.pokemonId);
      if( currentPokemonIndex >=0 ) {
        newPokemonList[currentPokemonIndex].favorite = !(newPokemonList[currentPokemonIndex].favorite);
      }
      return {...state, list: newPokemonList };
      // const newPokemonList = [...state.list];
      // const currentPokemonIndex = state
      //   .get('list')
      //   .findIndex((elem) => elem.id===action.payload.pokemonId);
      // const isFavorite = state.get(['list',currentPokemonIndex,'favorite']);
      // return state.setIn(['list',currentPokemonIndex,'favorite'],!isFavorite)

    default: 
      return state; //{...state }
  }
};
export default pokemonReducer;
