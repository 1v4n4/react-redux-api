import { combineReducers } from 'redux';
import listReducer from './list';
import pokemonReducer from './pokemon';

const Reducer = combineReducers({
  pokemons: listReducer,
  pokemon: pokemonReducer,
});

export default Reducer;
