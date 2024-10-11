/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react"
import { differenceInCalendarDays } from "date-fns";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";



export default function BookingWidget({ place }) {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setChekOut] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [redirect,setRedirect] = useState('');
    const {user} = useContext(UserContext);

    useEffect(() => {
        if (user) {
            setName(user.name);
        }
    },[user]);

    let numberOfNights = 0;
    if (checkIn && checkOut) {
        numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
    }

    async function bookThisPlace() {
        const response = await axios.post('/bookings', {
            checkIn,checkOut,numberOfGuests,name,phone,
            place:place._id,
            price:numberOfNights * place.price,
          });
          const bookingId = response.data._id;
          setRedirect(`/account/bookings/${bookingId}`);
    }

    if (redirect) {
        return <Navigate to={redirect} />
      }

    return (
        <div>
            <div className="bg-dark-subtle rounded-4 p-4 mt-4">
                <div className="fw-bold text-center">
                    Price : $.{place.price} / per night
                </div>
                <div className="border rounded-4 ">
                    <div className="d-flex">
                        <div className="py-2 px-5 border-end">
                            <label>Check in :</label>
                            <input type="date" value={checkIn} onChange={ev => setCheckIn(ev.target.value)} />
                        </div>
                        <div className="py-2 px-5">
                            <label>Check out :</label>
                            <input type="date" value={checkOut} onChange={ev => setChekOut(ev.target.value)} />
                        </div>
                    </div>
                    <div className="py-3 px-4 border-top">
                        <label>Number of guests :</label>&nbsp;
                        <input type="number" value={numberOfGuests} onChange={ev => setNumberOfGuests(ev.target.value)} />
                    </div>
                    {numberOfNights > 0 && (
                        <div className="py-3 px-4 border-top d-grid">
                            <label>Your full name:</label>
                            <input type="text" className="rounded"
                                value={name}
                                onChange={ev => setName(ev.target.value)} />
                            <label>Phone number:</label>
                            <input type="tel" className="rounded"
                                value={phone}
                                onChange={ev => setPhone(ev.target.value)} />
                        </div>
                    )}
                </div>
                <button onClick={bookThisPlace} className="btn btn-danger form-control mt-4">
                    Book this place
                    {numberOfNights > 0 && (
                        <span> ${numberOfNights * place.price}</span>
                    )}
                </button>
            </div>
        </div>
    )
}

