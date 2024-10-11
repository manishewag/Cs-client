/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function Perks({selected,onChange}) {

    function handleClick(event) {
        const {checked,name} = event.target;
        if (checked) {
            onChange([...selected,name]);
        }
        else {
            onChange([...selected.filter(selectedName => selectedName !== name)]);
        }
    }


    return (
        <>
            <label className='border p-2 d gap-3 px-4 mt-2'>
                <input type='checkbox' checked={selected.includes('wifi')} name='wifi' onChange={handleClick}/>
                <i className="bi bi-wifi"></i>
                <span>Wifi</span>
            </label>
            <label className='border p-2 d gap-3 px-4 mt-2'>
                <input type='checkbox' checked={selected.includes('free parking')} name='free parking' onChange={handleClick}/>
                <i className="bi bi-car-front"></i>
                <span>Free Parking</span>
            </label>
            <label className='border p-2 d gap-3 px-4 mt-2'>
                <input type='checkbox' checked={selected.includes('tv')} name='tv' onChange={handleClick}/>
                <i className="bi bi-tv"></i>
                <span>Tv</span>
            </label>
            <label className='border p-2 d gap-3 px-4 mt-2'>
                <input type='checkbox' checked={selected.includes('radio')} name='radio' onChange={handleClick}/>
                <i className="bi bi-boombox"></i>
                <span>Radio</span>
            </label>
            <label className='border p-2 d gap-3 px-4 mt-2'>
                <input type='checkbox' checked={selected.includes('pets')} name='pets' onChange={handleClick}/>
                <i className="bi bi-emoji-smile"></i>
                <span>Pets</span>
            </label>
            <label className='border p-2 d gap-3 px-4 mt-2'>
                <input type='checkbox' checked={selected.includes('enterance')} name='enterance' onChange={handleClick}/>
                <i className="bi bi-fullscreen-exit"></i>
                <span>Enterance</span>
            </label>
        </>

    )
}


