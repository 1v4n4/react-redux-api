import { combineReducers } from 'redux';
import listReducer from './list';

const Reducer = combineReducers({
  pokemons: listReducer,
});
export default Reducer;
