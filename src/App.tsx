// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from 'components/pages/Home';
import { Page404 } from 'components/pages/Page404';
import { Login } from 'components/pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
