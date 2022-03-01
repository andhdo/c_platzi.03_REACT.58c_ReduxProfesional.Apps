import React from 'react';
import { useDispatch } from 'react-redux';
import { setFavorite } from './actions';
import './PokemonCard.css';

const PokemonCard = ({pokemon}/*{name,img}*/) => {
  const url=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png;`
  const dispatch = useDispatch();
  const handleFavorite = () => {
    dispatch(setFavorite({pokemonId:pokemon.id}));
  };
  const FAV_COLOR='yellow';
  const DEFAULT_COLOR='grey';
  const color = pokemon.favorite ? FAV_COLOR : DEFAULT_COLOR;
  return (
    <div className='product-card'>
      <img src={pokemon.sprites.front_default} alt="pokemon"/>
      <div className='product-info'>
        <button className='PokemonCard-favorite'  onClick={handleFavorite}>
          <span style={{color}}>Fav</span>
        </button>
        <p>{pokemon.name}</p>
        <p>{pokemon.types.map((type)=>(
          <span key={`${pokemon.id}-${type.type.name}`}>{type.type.name} </span>
        ))}</p>
      </div>
    </div>
  );
};

export {PokemonCard};