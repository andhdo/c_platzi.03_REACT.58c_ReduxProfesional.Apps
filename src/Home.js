import React, { useEffect } from 'react';
import { fetchPokemonWithDetails, getPokemonWithDetails, setError, setPokemon } from './actions';
import { getPokemons } from './api/getPokemons';
import { PokemonList } from './PokemonList';

// // redux: antes
// import { connect } from 'react-redux';
// redux: hooks
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Loader from './Loader';


const Home = (/*redux-antes:{list, setPokemons}*/) => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.pokemon.list);
  // const list = useSelector(state => state.pokemon.list).toJS();
  const loading = useSelector(state => state.ui.loading);
  // const loading = useSelector(state => state.getIn(['ui','loading'])).toJS();

  useEffect(() => {
    // redux-thunk-> src hacia actions
    // getPokemons()
    // .then((res)=> {
    //   // console.log(res);
    //   // setPokemons(res.data.results); // redux-antes
    //   const pokemonList = res.data.results;
    //   return Promise.all(
    //     pokemonList.map(
    //       pokemon=> axios.get(pokemon.url)
    //     )
    //   );

    //   //dispatch(setPokemon(res.data.results));
    // }) 
    // .then(pokemonsResponse=> {
    //   const pokemonsData = pokemonsResponse.map((response)=> response.data )
    //   console.log(pokemonsData);
    //   dispatch(setPokemon(pokemonsData));
    // })
    // .catch((error)=>{
    //   dispatch(setError({message:'ocurrio errror', error}));
    // }) 
    
    dispatch( fetchPokemonWithDetails() );

  }, []);
  return (
    <section className="main-container">
      home
      {loading && <Loader /> }
      <PokemonList pokemons={list} />
    </section>
  );
};

// // redux: antes
// const mapStateToProps = state => ({
//   list: state.list
// });
// const mapDispatchToProps = dispatch => ({
//   setPokemons: value => dispatch(setPokemon(value))
// });

// // redux: antes
// export default connect(mapStateToProps, mapDispatchToProps)( Home );

// redux: hooks: useselector usedispatch
export default Home ;