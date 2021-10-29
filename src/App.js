import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./compenents/Home";
import Members from "./compenents/members";
import Cars from "./compenents/cars";
import About from "./compenents/about";
import './App.css'


function App() {
  return (
    <div className="App">
       <Router>
      <div >
        <nav className='navbar'>
          <ul>
            <li className='home'>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/members">Members</Link>
            </li>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/members">
            <Members />
          </Route>
          <Route path="/cars">
            <Cars />
          </Route>
          <Route path="/Home">
            <Home/>
          </Route>
          <Route path="/about">
              <About/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
