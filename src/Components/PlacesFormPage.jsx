// /* eslint-disable no-undef */
import axios from "axios";
import { useEffect, useState } from "react";
import Perks from "./Perks";
import AccountNav from "./AccountNav";
import PhotosUploader from "./PhotosUploader";
import { Navigate, useParams } from "react-router-dom";
import Header from "./Header";


export default function PlacesFormPage() {
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState(1);
    const [price, setPrice] = useState(100);
    const [redirect, setRedirect] = useState(false);


    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/places/' + id).then(response => {
            const { data } = response;
            setTitle(data.title);
            setAddress(data.address);
            setAddedPhotos(data.photos);
            setDescription(data.description);
            setPerks(data.perks);
            setExtraInfo(data.extraInfo);
            setCheckIn(data.checkIn);
            setCheckOut(data.checkOut);
            setMaxGuests(data.maxGuests);
            setPrice(data.price);
        });
    }, [id]);



    function inputHeader(text) {
        return (
            <h5 className='mt-3'>{text}</h5>
        );
    }
    function inputDescription(text) {
        return (
            <p className="form-text">{text}</p>
        );
    }
    function preInput(header, description) {
        return (
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        );
    }

    async function savePlace(event) {
        event.preventDefault();
        const placeData = {
            title, address, addedPhotos, description,
            perks, extraInfo, checkIn,
            checkOut, maxGuests, price,
        };
        if (id) {
            // update
            await axios.put('/places', {
                id, ...placeData

            });
            setRedirect(true);
        } else {
            // new place
            await axios.post('/places', placeData);
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/account/places'} />
    }


    return (
        <div>

            <Header/>
            <AccountNav />

            <form onSubmit={savePlace}>
                {preInput('Title', 'title for your place')}
                <input type='text' className='form-control' placeholder='title'
                    value={title} onChange={e => setTitle(e.target.value)} />

                {preInput('Address', 'address to your place')}
                <input type='text' className='form-control' placeholder='Address'
                    value={address} onChange={e => setAddress(e.target.value)} />

                {preInput('Photos', 'more = better')}

                <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

                {preInput('Description', 'Description of the place')}
                <textarea className='form-control' placeholder='Description'
                    value={description} onChange={e => setDescription(e.target.value)} />

                {preInput('Perks', 'select the perks of your place')}
                <div className='row row-cols-3'>
                    <Perks selected={perks} onChange={setPerks} />
                </div>

                {preInput('Extra info', 'house rules, etc')}
                <textarea className="form-control" value={extraInfo} onChange={e => setExtraInfo(e.target.value)} />

                {preInput('Check in&out times, max guests', 'add check in and out times, remember to have some time window for cleaning the room between guests')}
                <div className='row row-cols-3'>
                    <div>
                        <h5>Check in time</h5>
                        <input type='text' className="form-control" placeholder='14:00'
                            value={checkIn} onChange={e => setCheckIn(e.target.value)} />
                    </div>
                    <div>
                        <h5>Check out time</h5>
                        <input type='text' className="form-control" placeholder='11:00'
                            value={checkOut} onChange={e => setCheckOut(e.target.value)} />
                    </div>
                    <div>
                        <h5>Max number of guests</h5>
                        <input type='number' className="form-control"
                            value={maxGuests} onChange={e => setMaxGuests(e.target.value)} />
                    </div>
                    <div>
                        <h5>Price per night</h5>
                        <input type='number' className="form-control"
                            value={price} onChange={e => setPrice(e.target.value)} />
                    </div>
                </div>
                <div>
                    <button className=' btn btn-danger form-control mt-4'>Save</button>
                </div>
            </form>
            <div className="mt-3"></div>

        </div>
    )
}

