import axios from 'axios';

const LIST_LOADING = 'LIST LOADING';
const LIST_SUCCESS = 'LIST SUCCESS';
const LIST_FAIL = 'LIST FAIL';

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

export {
  getList, LIST_LOADING, LIST_SUCCESS, LIST_FAIL,
};
