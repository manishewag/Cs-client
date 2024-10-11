/* eslint-disable react/prop-types */
import { useState } from "react";



useState
export default function PlaceGallery({ place }) {
    const [showAllPhotos, setShowAllPhotos] = useState(false);


    if (showAllPhotos) {
        return (
            <div className="px-5 py-4 bg-dark text-white">
                <div className="d-grid gap-4">
                    <div className="position-relative">
                        <h4>Photos of {place.title}</h4>
                        <button onClick={() => setShowAllPhotos(false)} className="d-flex gap-1 p-1 opacity-75 rounded-3  px-2 position-fixed end-0 translate-middle-x">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                            </svg>
                            Close Photos</button>
                    </div>
                    {place?.photos?.length > 0 && place.photos.map(photo => (
                        <div key={photo}>
                            <img className="w-100 h-100 rounded-4" src={'https://cs-backend1-4ogz.onrender.com/uploads/' + photo} alt="" />
                        </div>
                    ))}
                </div>

            </div>
        )
    }



    return (
        <div className="position-relative">
            <div className="d-flex flex-wrap mt-4">
                <div className="col-6 px-2">
                    {place.photos?.[0] && (
                        <img onClick={() => setShowAllPhotos(true)} className='rounded-4 w-100 h-100' src={'https://cs-backend1-4ogz.onrender.com/uploads/' + place.photos[0]} alt="" />
                    )}
                </div>
                <div className="col-3 px-2 mb-4">
                    {place.photos?.[1] && (
                        <img onClick={() => setShowAllPhotos(true)} className='rounded-4 w-100 h-50 mb-4' src={'https://cs-backend1-4ogz.onrender.com/uploads/' + place.photos[1]} alt="" />
                    )}
                    {place.photos?.[2] && (
                        <img onClick={() => setShowAllPhotos(true)} className='rounded-4 w-100 h-50' src={'https://cs-backend1-4ogz.onrender.com/uploads/' + place.photos[2]} alt="" />
                    )}
                </div>
                <div className="col-3 px-0 mb-4">
                    {place.photos?.[3] && (
                        <img onClick={() => setShowAllPhotos(true)} className='rounded-4 w-100 h-50 mb-4' src={'https://cs-backend1-4ogz.onrender.com/uploads/' + place.photos[3]} alt="" />
                    )}
                    {place.photos?.[4] && (
                        <img onClick={() => setShowAllPhotos(true)} className='rounded-4 w-100 h-50' src={'https://cs-backend1-4ogz.onrender.com/uploads/' + place.photos[4]} alt="" />
                    )}
                </div>
            </div>

            <button onClick={() => setShowAllPhotos(true)} className="position-absolute bottom-0  end-0 bg-light p-1 opacity-75 rounded-3 d-flex gap-2 px-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image mt-1" viewBox="0 0 16 16">
                    <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                    <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z" />
                </svg>
                Show all photos</button>

        </div>
    )
}

