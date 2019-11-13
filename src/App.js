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
import Player from './component/Player';
import Vip from './pages/Vip';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/top100"   component={(props) => <Top100 limit="36" category={""} />}/>
            <Route exact path="/Action" component={(props) => <Top100 limit="12" category={"Action"} />}/>
            <Route exact path="/Comedy" component={(props) => <Top100 limit="12" category={"Comedy"} />}/>
            <Route exact path="/Crime" component={(props) => <Top100 limit="12" category={"Crime"} />}/>
            <Route exact path="/Drama" component={(props) => <Top100 limit="12" category={"Drama"} />}/>
            <Route exact path="/Thriller"  component={(props) => <Top100 limit="12" category={"Thriller"} />}/>
            <Route exact path="/Horror" component={(props) => <Top100 limit="12" category={"Horror"} />}/>
            <Route path="/vip"  component={Vip}/>
            <Route path="/watch" component={Player}/>
            <Route exact path="/404" component={Eror404} />
            <Redirect from='*' to="/404" /> 
        </Switch>
      </Router>
    </div>
  );
}


export default App;
