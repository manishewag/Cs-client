/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Link, Navigate, useParams } from 'react-router-dom'
import AccountNav from './AccountNav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import PlaceImg from './PlaceImg';




export default function PlacesPage() {

     const [places, setPlaces] = useState([]);

    useEffect(() => {
        axios.get('/user-places').then(({data}) => {
            setPlaces(data);
        })
    },[]);


    return (
        <div>
            <Header/>
            <AccountNav />
            <div className='d-flex justify-content-center mt-4 gap-4'>
                <Link className='px-3 py-1 d border bg-danger text-white' to={'/account/places/new'}>
                    + Add new places</Link>
            </div>
            <div className='mt-4'>
                {places.length > 0 && places.map(place => (
                    <Link to={'/account/places/'+place._id} className='d-flex border bg-body-secondary p-2 rounded px-2 gap-3 cursor-pointer mt-2 text-decoration-none text-black' key={place}>
                        <div className='col-2 bg-secondary-subtle rounded' key={place} >
                           <PlaceImg place={place}/>
                        </div>
                        <div>
                           <h4 className='fw-bold'>{place.title}</h4>
                           <p className='text-sm mt-3'>{place.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="mt-4"></div>
        </div>
        
    );
}

