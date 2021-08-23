import { POKEMON_LOADING, POKEMON_SUCCESS, POKEMON_FAIL } from '../actions/index';

const initialState = {
  loading: false,
  data: {},
  errorMSG: '',
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case POKEMON_LOADING:
      return { ...state, loading: true, errorMSG: '' };
    case POKEMON_FAIL:
      return {
        ...state, loading: false, errorMSG: 'Yikes! Can\'t find that pokemon',
      };
    case POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMSG: '',
        data: {
          ...state.data, [action.pokemonName]: action.payload,
        },
      };
    default:

      return state;
  }
};

export default pokemonReducer;
