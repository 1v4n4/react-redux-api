import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../actions/index';

const Pokemon = (props) => {
  console.log('props', props);
  /* eslint-disable */
  const name = props.match.params.pokemon;
  console.log('name', name);
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.pokemon);
  console.log('pokstate', pokemonState);
  const FetchPokemon = (name) => {
    dispatch(getPokemon(name));
  };

  useEffect(() => {
    FetchPokemon(name);
  }, []);


  const ShowData = () => {
    const data = pokemonState.data[name];

    if (pokemonState.data[name]) {
      return (<div>
  <h3>base_experience: {data.base_experience}</h3>
  <h3>Sprites</h3>
  <img src={data.sprites.back_default} alt=""/>
  <img src={data.sprites.back_female} alt=""/>
  <img src={data.sprites.back_shiny} alt=""/>
  <img src={data.sprites.back_shiny_female} alt=""/>
  <img src={data.sprites.front_default} alt=""/>
  <img src={data.sprites.front_female} alt=""/>
  <h3>Stats</h3>
  {data.stats.map(item => {
    return (
    <p>{item.stat.name} {item.base_stat}</p>)

  }
  )}
  <h3>Abilites</h3>
  {data.abilities.map(item => {
    return <p>{item.ability.name}</p>
  })
  }
  </div>
  )
  }

    if (pokemonState.loading) {
      console.log(pokemonState.data);
      return <p className="show-data-msg">Loading...</p>;
    }
    if (pokemonState.errorMSG !== '') {
      console.log(pokemonState.data);
      return <p className="show-data-msg">{pokemonState.errorMSG}</p>;
    }
    return <p className="show-data-msg">Yikes! No pokemon</p>;
  };




  return (

    <div className="pokemon-pokemonState">
    <h1>{name.toUpperCase()}</h1>
    <div>{ShowData()}</div>
    </div>
  );
};
export default Pokemon;
