import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Header from "./Header";
import AddressLink from "./AddressLink";
import PlaceGallery from "./PlaceGallery";
import BookingDates from "./BookingDates";


export default function BookingPage() {
    const {id} = useParams();
    const [booking,setBooking] = useState(null);
   
  useEffect(() => {
    if (id) {
      axios.get('/bookings').then(response => {
        const foundBooking = response.data.find(({_id}) => _id === id);
        if (foundBooking) {
          setBooking(foundBooking);
        }
      });
    }
  }, [id]);

  if (!booking) {
    return '';
  }


  return (
  <>
     <Header/>
    <div className="px-4">
      <h2 className="text-sm px-1">{booking.place.title}</h2>
      <AddressLink className='d-flex '>{booking.place.address}</AddressLink>
      <div className="bg-secondary-subtle rounded-4 px-4 p-3 mt-3 d-flex justify-content-between">

        <div>
        <h5 className="mb-4 fs-4 ">Your booking information:</h5>
        <BookingDates booking={booking}/>
        </div>

        <div className="bg-danger p-2 rounded-3 text-white opacity-100">
          <div className="fw-semibold">Total price</div>
          <div className="fs-2 fw-semibold">${booking.price}</div> 
        </div> 
      </div>

      <PlaceGallery place={booking.place}/>
    </div>
    <div className="mt-4"></div>
    <Link to={'/'} className="form-control bg-danger rounded-3 text-white text-decoration-none text-center">
      Close
    </Link>
    <div className="mt-2"></div>
  </>
  )
}

