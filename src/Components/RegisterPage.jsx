/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import Header from './Header';

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function registerUser(event) {
        event.preventDefault();
        try {
            await axios.post('/register', {
                name,
                email,
                password,
            });
            alert('Registration Successful. Now You Can Log in');
        } catch (e) {
            alert('Registration failed. Please try again later');
        }
    }


    return (
        <>
                    <Header/>
        <div className='d-flex mt-5 justify-content-center align-items-center bg-light'>
            <div className='w-50 border shadow px-5 pt-3 pb-5 rounded' >
                <h1 className='text-center mb-4'>Register</h1>
                <form onSubmit={registerUser}>
                    <div className='mb-3'>
                        <input type='name' name='name' className='form-control' placeholder='Enter Name' value={name}
                            onChange={ev => setName(ev.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <input type='email' name='email' className='form-control' placeholder='Enter Email' value={email}
                            onChange={ev => setEmail(ev.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <input type='text' name='password' className='form-control' placeholder='Enter Password' value={password}
                            onChange={ev => setPassword(ev.target.value)} />
                    </div>
                    <button className='btn btn-danger form-control'>Register</button>
                    <div className='text-center py-2' >
                        Already a member?
                        <Link to="/login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default RegisterPage