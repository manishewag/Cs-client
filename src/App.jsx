
/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexPage from './Components/IndexPage'
import Login from './Components/Login'
import Layout from './Components/Layout'
import RegisterPage from './Components/RegisterPage'
import axios from "axios"
import { UserContextProvider } from './Components/UserContext'
import ProfilePage from './Components/AccountPage'
import PlacesPage from './Components/PlacesPage'
import PlacesFormPage from './Components/PlacesFormPage'
import PlacePage from './Components/PlacePage'
import BookingsPage from './Components/BookingsPage'
import BookingPage from './Components/BookingPage'

axios.defaults.baseURL = 'https://cs-backend1-4ogz.onrender.com';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
        <Route index element={<IndexPage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/account' element={<ProfilePage/>}></Route>
        <Route path='/account/places' element={<PlacesPage/>}></Route>
        <Route path='/account/places/new' element={<PlacesFormPage/>}></Route>
        <Route path='/account/places/:id' element={<PlacesFormPage/>}></Route>
        <Route path='/place/:id' element={<PlacePage/>}></Route>
        <Route path='/account/bookings' element={<BookingsPage/>}></Route>
        <Route path='/account/bookings/:id' element={<BookingPage/>}></Route>
      </Routes>
    </UserContextProvider>

  )
}

export default App