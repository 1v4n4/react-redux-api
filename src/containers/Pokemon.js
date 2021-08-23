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
    if (pokemonState.data[name]) {
      return <p className="show-data-msg">Have data</p>;
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
