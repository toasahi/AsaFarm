// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from 'components/pages/Home';
import { Page404 } from 'components/pages/Page404';
import { Login } from 'components/pages/Login';
import { About } from 'components/pages/About';
import { Service } from 'components/pages/Service';
import { Router } from 'router/Router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
