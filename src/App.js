import React from 'react';
import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Shop from './Component/Shop/Shop';
import NoMatch from './Component/NoMatch/NoMatch';
import CartPerview from './Component/Shop/AllShop/CartPerview/CartPerview';

function App() {
  return (
    <div className="App">
     <Router>
        <Home></Home>
        <Switch>
          <Route path="/shop">
            <Shop/>
          </Route>
          <Route path="/home">
            
          </Route>
          <Route exact path="/">
            
          </Route>
          <Route>
            <CartPerview/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
          
        </Switch>
     </Router>
    </div>
  );
}

export default App;
