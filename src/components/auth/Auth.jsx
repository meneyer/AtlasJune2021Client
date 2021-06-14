import React from 'react';
import Signup from './Signup'
import Login from "./Login"

const Auth = (props) => {
    return (
        <div>
            Hello from Auth
            <Signup/>
            <Login/>
            {/* <Signup updateToken={props.updateToken}/> */}
            {/* <Login updateToken={props.updateToken}/> */}
        </div>
    );
}

export default Auth;