import APIURL from "./helpers/environment.js";
import './App.css';

import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HomePage  from "./components/HomePage.jsx";
import ChatRoom  from "./components/ChatRoom.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/:roomId" component={ChatRoom}/>
      </Switch>
    </Router>
  );
}

export default App;
