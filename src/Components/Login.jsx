/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {Link, Navigate} from "react-router-dom";
import {useContext} from "react";
import axios from "axios";
import { UserContext } from './UserContext';
import Header from './Header';

UserContext
function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUser} = useContext(UserContext);

    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
         const {data} = await axios.post('/login', {email,password});
         setUser(data);
          alert('Login successful');
          setRedirect(true);
        } catch (e) {
          alert('Login failed');
        }
      }

      if (redirect) {
        return <Navigate to={'/'} />
      }

    return (
        <>
                  <Header/>
        <div className='d-flex mt-5 justify-content-center align-items-center bg-light'>
            <div className='w-50 border shadow px-5 pt-3 pb-5 rounded' >
                <h1 className='text-center mb-4'> Log in</h1>
                <form onSubmit={handleLoginSubmit} >
                    <div className='mb-3'>
                        <input type='email' name='email' className='form-control' placeholder='Enter Email' value={email}
                        onChange={ev => setEmail(ev.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <input type='text' name='password' className='form-control' placeholder='Enter Password' value={password} 
                        onChange={ ev => setPassword(ev.target.value)}/>
                    </div>
                    <button className='btn btn-danger form-control'>Login</button>
                    <div className='text-center py-2' >
                    Don't have an account yet?
                    <Link to="/register">Register</Link>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login