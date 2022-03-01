import React from 'react';
import { PokemonCard } from './PokemonCard';
import './PokemonList.css';

const PokemonList = ({pokemons}) => {
  /*
  const pokemons = [{
    name:'pokemon1',
    img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png',
  },{
    name:'pokemon2',
    img:'https://whackahack.com/foro/attachments/pm0006_00_00_00_l-png.7491/',
  }];
  */
 console.log('poklist',pokemons);
  return (
    <div className='cards-container'>
      {pokemons.map((pokemon,index)=>(
        <PokemonCard key={`pokemon-${index}`} pokemon={pokemon} />
      ))} 
    </div>
  );
};
PokemonList.defaultProps = {
  pokemons: [],
};

export { PokemonList };