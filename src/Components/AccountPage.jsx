/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import { useContext } from "react"
import { UserContext } from "./UserContext"
import {  Navigate, useParams } from "react-router-dom";
import axios from 'axios';
import PlacesPage from './PlacesPage';
import AccountNav from './AccountNav';
import Header from './Header';


function ProfilePage() {
    const [redirect, setRedirect] = useState(null);
    const { ready, user, setUser } = useContext(UserContext);
    let { subpage } = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }

    async function logout() {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }

    if (!ready) {
        return 'Loading...';
    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }


    return (<>
        <div>
            <Header/>
            <AccountNav/>
            {subpage === 'profile' && (
                <div className='text-center mt-4'>
                    Logged in as {user.name} ({user.email})<br />
                    <button onClick={logout} className='btn btn-danger form-control w-50 mt-4'>Logout</button>
                </div>
            )}
            {subpage === 'places' && (
                <PlacesPage />
            )}
        </div>
    </>
    )
}

export default ProfilePage

