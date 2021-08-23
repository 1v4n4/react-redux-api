import axios from 'axios';

const LIST_LOADING = 'LIST LOADING';
const LIST_SUCCESS = 'LIST SUCCESS';
const LIST_FAIL = 'LIST FAIL';

const POKEMON_LOADING = 'POKEMON LOADING';
const POKEMON_SUCCESS = 'POKEMON SUCCESS';
const POKEMON_FAIL = 'POKEMON FAIL';

const getList = (page) => async (dispatch) => {
  try {
    dispatch({
      type: LIST_LOADING,
    });
    const perPage = 15;
    const offset = (page * perPage) - perPage;
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${perPage}&offset=${offset}`);

    dispatch({
      type: LIST_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    dispatch({
      type: LIST_FAIL,
    });
  }
};

const getPokemon = (name) => async (dispatch) => {
  console.log('pok name', name);
  try {
    dispatch({
      type: POKEMON_LOADING,
    });
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    console.log('result', result.data);

    dispatch({
      type: POKEMON_SUCCESS,
      payload: result.data,
      pokemonName: name,
    });
  } catch (e) {
    dispatch({
      type: POKEMON_FAIL,
    });
  }
};

export {
  getList, LIST_LOADING, LIST_SUCCESS, LIST_FAIL, POKEMON_LOADING,
  POKEMON_SUCCESS, POKEMON_FAIL, getPokemon,
};
