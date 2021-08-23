import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getList } from '../actions';

const PokemonList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.pokemons);

  const FetchData = (page = 1) => {
    dispatch(getList(page));
  };

  useEffect(() => {
    FetchData();
  }, []);

  const ShowData = () => {
    if (list.data !== []) {
      console.log(list.data);
      return (list.data.map((item) => (
        <div key={item.name}>
          <p>{item.name}</p>
          <Link to={`/pokemon/${item.name}`}>View pokemon</Link>
        </div>
      )));
    }

    if (list.loading) {
      console.log(list.data);
      return <p className="show-data-msg">Loading...</p>;
    }
    if (list.errorMSG !== '') {
      console.log(list.data);
      return <p className="show-data-msg">{list.errorMSG}</p>;
    }
    return <p className="show-data-msg">Yikes! No data</p>;
  };

  return (
    <div className="pokemon-list">
      <h1>Pokemon list</h1>
      <h3>{ShowData()}</h3>
    </div>
  );
};
export default PokemonList;
