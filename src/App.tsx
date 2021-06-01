// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from 'components/pages/Home';
import { Page404 } from 'components/pages/Page404';
import { Login } from 'components/pages/Login';
import { About } from 'components/pages/About';
import { Service } from 'components/pages/Service';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/service">
            <Service />
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
