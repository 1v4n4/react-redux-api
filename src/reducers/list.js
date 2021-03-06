import { LIST_FAIL, LIST_LOADING, LIST_SUCCESS } from '../actions';

const initialState = {
  loading: false,
  data: [],
  errorMSG: '',
  count: 0,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_LOADING:
      return { ...state, loading: true, errorMSG: '' };
    case LIST_SUCCESS:
      return {
        ...state, loading: false, data: action.payload.results, count: action.payload.count, errorMSG: '',
      };
    case LIST_FAIL:
      return {
        ...state, loading: false, data: [], errorMSG: 'Unable to get data',
      };
    default:
      return state;
  }
};

export default listReducer;
