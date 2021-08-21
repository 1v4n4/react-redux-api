import '../CSS/App.css';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import PokemonList from '../containers/PokemonList';
import Pokemon from '../containers/Pokemon';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={PokemonList} />
        <Route exact path="/pokemon/:pokemon" component={Pokemon} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
