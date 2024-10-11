/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import AccountNav from "./AccountNav";
import Header from "./Header";
import axios from "axios";
import PlaceImg from "./PlaceImg";
import { Link } from "react-router-dom";
import BookingDates from "./BookingDates";


export default function BookingsPage() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('/bookings').then(response => {
      setBookings(response.data);
    });
  }, []);


  return (
    <div>
      <Header />
      <AccountNav />
      <div className="px-5">
        {bookings?.length > 0 && bookings.map(booking => (
          <Link to={`/account/bookings/${booking._id}`} className="d-flex bg-secondary-subtle gap-2 mt-4 rounded-3 text-decoration-none text-black">
            <div className="col-2">
              <PlaceImg place={booking.place} />
            </div>
            <div className="mt-3 px-2">
              <h4 className="fw-bold">{booking.place.title}</h4><hr />

              <BookingDates booking={booking}/>

              <div className="mt-4 d-flex gap-2 mb-4 fw-bold fs-5">
              <i className="bi bi-credit-card-fill"></i>
               Total price: ${booking.price}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-4"></div>
    </div>
  
  )
}
