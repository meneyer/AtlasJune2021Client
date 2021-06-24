import React, {useState, useEffect} from "react";
import './App.css';
import APIURL from "./helpers/environment.js";
import Auth from './components/auth/Auth'
import SiteBar from './components/SiteBar'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from "./components/HomePage";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import ChatRoom  from "./components/ChatRoom.jsx";

function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    };
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken)
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  // const protectedViews = () => {
  //   return (sessionToken === localStorage.getItem('token') ?
  //   <ChatNameHere token={sessionToken}/> : <Auth updateToken={updateToken}/>)
  // }

  return (
    <div>
      Hello from App
      <Auth />
      {/* <Sitebar clickLogout = {clearToken}/> */}
     <SiteBar />
      {/* <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/:roomId" component={ChatRoom}/>
      </Switch>
    </Router> */}
      <Header />
      {/* {protectedViews()} */}
      <Footer />
      <HomePage />
    </div>
  );
}

export default App;
