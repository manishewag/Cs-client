/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios';
import { Link } from 'react-router-dom';



function IndexPage() {

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        axios.get('/places').then(response => {
            setPlaces(response.data);
        })
    },[]);


    return <>

            <Header/>
        <div className='d-flex flex-wrap row-cols-6 px-5 py-3 gap-5'>
            {places.length > 0 && places.map(place =>
                <Link to={'/place/'+place._id} className='text-decoration-none text-black' key={place.i}>
                    <div className='ratio ratio-1x1' >
                    {place.photos?.[0] && (
                        <img  className='rounded w-100 h-100 object-fit-cover border rounded-4 ' src={'https://cs-backend1-4ogz.onrender.com/uploads/'+place.photos?.[0]} alt="" />
                    )}
                    </div>
                    <h5 className='fw-bold text-truncate mt-2'>{place.address}</h5>
                    <h6 className='fw-light'>{place.title}</h6>
                    <div>
                       <span className='fw-bold'>$.{place.price}</span> per night
                    </div>
                    
                </Link>
            )}
        </div>
       

    </>
}


export default IndexPage


// row-cols-5 
// ratio ratio-1x1