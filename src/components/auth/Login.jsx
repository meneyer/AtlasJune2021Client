import React, { useState } from 'react';
import APIURL from "../../helpers/environment"

const Login = (props) => {

    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [role, setRole] = useState('');

    // const handleSubmit =(e) => {
    //     e.preventDefault();
    //     fetch(`${APIURL}/user/login`, {
    //         method: 'POST',
    //         body: JSON.stringify({user: {username: username, email: email, password: password, role:role}}),
    //         headers: new Headers ({
    //             'Content-Type': 'application/json'
    //         })
    //         }).then(
    //             (res) => res.json()
    //         ).then((data) => {
    //             props.updateToken(data.sessionToken)
    //     })
    // }


    return (
        <div>
            Hello from Login
            {/* <h1>Login</h1>
            <form onSubmit={handleSubmit}>

            </form> */}
        </div>
    );
}

export default Login;

//EXAMPLE FROM WORKOUTLOG FOR REFERENCE
//     return(
//         <div>
//             <h1>Login</h1>
//             <Form onSubmit={handleSubmit}>
//                 <FormGroup>
//                     <Label htmlFor="username">Username</Label>
//                     <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
//                 </FormGroup>
//                 <FormGroup>
//                     <Label htmlFor="password">Password</Label>
//                     <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
//                 </FormGroup>
//                 <Button type="submit">Login</Button>
//             </Form>
//         </div>
//     )
// }

// export default Login;