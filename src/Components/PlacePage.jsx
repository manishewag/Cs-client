/* eslint-disable react/jsx-key */
import { useParams } from "react-router-dom"
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import BookingWidget from "../Components/BookingWidget";
import PlaceGallery from "./PlaceGallery";
import AddressLink from "./AddressLink";

axios

export default function PlacePage() {
    const { id } = useParams();

    const [place, setPlace] = useState(null); 

    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get(`/places/${id}`).then(response => {
            setPlace(response.data);
        });
    }, [id]);

    if (!place) return '';

    
    return (
        <>
            <Header />
            <div className="mt-2 px-5 bg-secondary-subtle rounded py-4">
            <h2 className="text-sm px-1">{place.title}</h2>
                <AddressLink>{place.address}</AddressLink>
               <PlaceGallery place={place}/>

                <div className="row row-cols-md-2">
                    <div>
                        <div className="my-4">
                            <h4 className="fw-bold">Description</h4>
                            {place.description}
                        </div>
                        Check-in : {place.checkIn}<br />
                        Check-out : {place.checkOut}<br />
                        Max no of guests : {place.maxGuests}
                    </div>

                    <div className="">
                        <BookingWidget place={place} />
                    </div>

                </div>
                <div className="mb-4 mt-3">
                    <h4 className="fw-bold">Extra info</h4>
                    <div className="">{place.extraInfo}</div>
                </div>
            </div>

        </>
    )
}


