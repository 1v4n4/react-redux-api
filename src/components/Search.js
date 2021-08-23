import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Search = (props) => {
  const [search, setSearch] = useState('');
  console.log('props search', props);
  /* eslint-disable */

  let history = useHistory();

  const routeChange = () => {
      const path = `/pokemon/${search}`;

      history.push(path)
  }
  return (
    <div>
      <p>Search</p>

      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <p>{search}</p>
      <button type="button" onClick={() => routeChange()}>Search</button>

    </div>
  );
};

export default Search