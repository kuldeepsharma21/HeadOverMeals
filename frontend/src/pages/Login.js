import React, { useState } from 'react'
import axios from 'axios';


function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const[token, setToken]=useState('')
    

    const handleLogin = async (e) => {


        // fetch(`http://localhost:8000/auth/`,{
        //     method:'POST',
        //     headers: {'Content-Type':'application/json'},
        //     body : JSON.stringify(username),JSON
        // }).then(
        //     data=>{
        //         console.log(data)
        //     }
        // ).catch(error=>console.error(error))

        // }


        // e.preventDefault();
        let formField = new FormData();
        formField.append("username", username);
        formField.append("password", password);
       
        await axios({
          method: "post",
          url: "http://127.0.0.1:8000/auth/",
          data: formField,
        }).then((response) => {
          console.log(response.data);
          setToken(response.data)
        });
      };

      const handleRegister = async (e) => {

      
        let formField = new FormData();
        formField.append("username", username);
        formField.append("password", password);
       
        await axios({
          method: "post",
          url: "http://127.0.0.1:8000/authent/users/",
          data: formField,
        }).then((response) => {
          console.log(response.data);
        });
      };


    return (
        <div>
            <h1>Login user form</h1>


            <label htmlFor="">
                Username:
                <input type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)} />

            </label>
            <br />
            <label htmlFor="">
                Password:
                <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
        </div>
    )
};

export default Login