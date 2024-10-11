/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState } from 'react'


export default function PhotosUploader({ addedPhotos, onChange }) {
    const [photoLink, setPhotoLink] = useState('');

    async function addPhotoByLink(event) {
        event.preventDefault();
        const { data: filename } = await axios.post('/upload-by-link', { link: photoLink });
        onChange(prev => {
            return [...prev, filename];
        });
        setPhotoLink('');
    }


    function uploadPhoto(event) {
        const files = event.target.files;
        const data = new FormData();
        for (let i = 0; i < files.length; i++) {
            data.append('photos', files[i]);
        }
        axios.post('/upload', data, {
            headers: { 'Content-type': 'multipart/form-data' }
        }).then(response => {
            const { data: filenames } = response;
            onChange(prev => {
                return [...prev, ...filenames];
            });
        })
    }

    function removePhoto(ev,filename) {
        ev.preventDefault();
        onChange([...addedPhotos.filter(photo => photo !== filename)]);
    }

    function selectAsMainPhoto(ev,filename) {
        ev.preventDefault();
        onChange([filename,...addedPhotos.filter(photo => photo !== filename)]);
    }


    return (
        <>
            <div className='d-flex gap-2'>
                <input type='text' className='form-control' placeholder={'Add using a link ....jpg'}
                    value={photoLink}
                    onChange={e => setPhotoLink(e.target.value)} />
                <button onClick={addPhotoByLink} className='border rounded bg-secondary-subtle' >Add&nbsp;Photo</button>
            </div>
            <div className='d-flex flex-wrap row-cols-6 mt-2 gap-2 '>
                {addedPhotos.length > 0 && addedPhotos.map(link => (
                    <div className='position-relative' key={link}>
                        <img className='rounded w-100 h-100' src={'https://cs-backend1-4ogz.onrender.com/uploads/' + link} alt="" />
                        <button onClick={ev => removePhoto(ev,link)} className='position-absolute top-0 end-0 text-white bg-dark p-1 opacity-50 rounded '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                            </svg>
                        </button>

                        <button onClick={ev => selectAsMainPhoto(ev,link)} className='position-absolute bottom-0 start-0 text-white bg-dark p-1 opacity-50 rounded '>
                            {link === addedPhotos[0] && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                            )}
                            {link !== addedPhotos[0] && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                            </svg>
                            )}
                        </button>

                    </div>
                ))}

                <label className='border bg-transparent rounded p-5'>
                    <input type='file' multiple className='invisible' onChange={uploadPhoto} />
                    <i className="bi bi-cloud-arrow-up"></i> Upload </label>
            </div>
        </>
    );
}

