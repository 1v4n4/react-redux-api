import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { getList } from '../actions';
import Search from '../components/Search';

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
    if (list.loading) {
      console.log(list.data);
      return <p className="show-data-msg">Loading...</p>;
    }

    if (list.data !== []) {
      console.log(list.data);
      return (list.data.map((item) => (
        <div key={item.name}>
          <p>{item.name}</p>
          <Link to={`/pokemon/${item.name}`}>View pokemon</Link>
        </div>
      )));
    }

    if (list.errorMSG !== '') {
      console.log(list.data);
      return <p className="show-data-msg">{list.errorMSG}</p>;
    }
    return <p className="show-data-msg">Yikes! No data</p>;
  };

  return (
    <div className="pokemon-list">
      <Search />
      <h1>Pokemon list</h1>
      <h3>{ShowData()}</h3>
      { (list.data !== []) && (

      <ReactPaginate
        pageCount={Math.ceil(list.count / 15)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={(data) => console.log('ej', data.selected)}
      />
      )}
    </div>
  );
};
export default PokemonList;
