import axios from 'axios';
import { getPokemons } from '../api/getPokemons';
import {
  SET_POKEMON,
  SET_ERROR,
  CLEAR_ERROR,
  TOGGLE_LOADER,
  SET_FAVORITE
} from './types';
export const setPokemon = (payload) => ({
  type: SET_POKEMON,
  payload
});
export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload,
});

export const toggleLoader = () => ({
  type: TOGGLE_LOADER
});
export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload
});

//////////////////////////

export const fetchPokemonWithDetails = () => dispatch => {

  dispatch(toggleLoader());
  getPokemons()
    .then((res)=> {
      // console.log(res);
      // setPokemons(res.data.results); // redux-antes
      const pokemonList = res.data.results;
      return Promise.all(
        pokemonList.map(
          pokemon=> axios.get(pokemon.url)
        )
      );

      //dispatch(setPokemon(res.data.results));
    }) 
    .then(pokemonsResponse=> {
      const pokemonsData = pokemonsResponse.map((response)=> response.data )
      console.log(pokemonsData);
      dispatch(setPokemon(pokemonsData));
      dispatch(toggleLoader());
    })
    .catch((error)=>{
      dispatch(setError({message:'ocurrio errror', error}));
      dispatch(toggleLoader());
    });


};


