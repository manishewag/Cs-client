import { Link, useLocation } from "react-router-dom"


export default function AccountNav() {
    const {pathname} = useLocation();
    let subpage = pathname.split('/')?.[2];
    if (subpage === undefined) {
        subpage = 'profile';
    }
        function linkClasses(type = null) {
        let classes = 'px-3 py-1 d border shadow ';
        if (type === subpage) {
            classes += ' border bg-danger text-white';
        } 
        return classes;
    }

    return (
        <>
        <nav className="d-flex justify-content-center mt-4 gap-4 ">
            <Link className={linkClasses('profile')} to={'/account'}>
                <i className="bi bi-person px-1 "></i>
                My profile</Link>
            <Link className={linkClasses('bookings')} to={'/account/bookings'}>
                <i className="bi bi-list-task px-1"></i>
                My bookings</Link>
            <Link className={linkClasses('places')} to={'/account/places'}>
                <i className="bi bi-buildings px-1"></i>
                My accommodations</Link>
        </nav>
        </>
    )
}