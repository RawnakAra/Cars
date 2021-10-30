import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./compenents/Home";
import Members from "./compenents/members";
import Cars from "./compenents/Cars";
import './App.css'


function App() {
  return (
    <div className="App">
       <Router>
      <div >
        <nav className='navbar'>
          <ul>
            <li className='home'>
              <Link style={{color:'white' ,textDecoration :'none'}} to="/Home">Home</Link>
            </li>
            <li>
              <Link style={{color:'white' ,textDecoration :'none'}} to="/members">Members</Link>
            </li>
            <li>
              <Link style={{color:'white' ,textDecoration :'none'}} to="/Cars">Cars</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/members">
            <Members />
          </Route>
          <Route path="/Cars">
            <Cars />
          </Route>
          <Route path="/Home">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
