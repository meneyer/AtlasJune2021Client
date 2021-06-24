import React, { useState } from 'react';
import { Link } from "react-router-dom";


const HomePage = () => {
    const [roomName, setRoomName] = useState("");
  
    const handleChange = (event) => {
      setRoomName(event.target.value);
    };
  
    return (
      <div className="homePageContainer">
        <input type="text" placeholder="Chatlas Room Name" value={roomName} onChange={handleChange} className="roomInputField"
        />
        <Link to={`/${roomName}`} className="roomButton">Join room</Link>
      </div>
    );
  };
  
export default HomePage;