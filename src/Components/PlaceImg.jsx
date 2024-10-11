/* eslint-disable react/prop-types */


export default function PlaceImg({place,index=0,className}) {
    if (!place.photos?.length) {
        return '';
    }
    if (!className) {
        className = 'rounded w-100 h-100';
    }
  return (

        <img className={className} src={'https://cs-backend1-4ogz.onrender.com/uploads/'+place.photos[index]} alt="" />

  )
}

