import './App.css';
import Login from './components/Login';
import Index from './components/Index';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
      <div className="App">
        <header className="App-header">
          <Login />
        </header>
     </div>
      </Route>
      <Route exact path="/index">
        <Index />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
