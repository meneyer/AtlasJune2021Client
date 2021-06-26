import React, { useState } from 'react';
import APIURL from "../../helpers/environment"
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'

const Signup = (props) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState(false);

    const handleSubmit =(e) => {
        e.preventDefault();
        fetch(`${APIURL}/users/signup`, {
            method: 'POST',
            body: JSON.stringify({users: {username: username, password: password, email: email,  admin:admin}}),
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
            }).then(
                (res) => res.json()
            ).then((data) => {
                props.updateToken(data.sessionToken)
        })
    }

    return (
        <div>            
            <h1>Signup</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
                </FormGroup>                
        
                {/* <FormGroup tag="fieldset" row>
                    <legend className="col-form-label col-sm-2">Are you an Admin?</legend>
                    
                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="admin" value={true} checked={setAdmin === true} />{' '}Yes
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="admin" value={false} checked={setAdmin === false}/>{' '}No
                        </Label>
                    </FormGroup>         
                    
                </FormGroup>          */}

                <Button type="submit">Sign up</Button>
            </Form>
        </div>
    );
}

export default Signup;