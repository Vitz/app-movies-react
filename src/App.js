import React from 'react';
import './App.css';
import Header from './component/Header'
import Eror404 from './pages/Error404'
import Home from './pages/Home'
import Top100 from './pages/Top100'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/top100" component={Top100}/>
            <Route exact path="/404" component={Eror404} />
            <Redirect from='*' to="/404" /> 
        </Switch>
      </Router>
    </div>
  );
}


export default App;
