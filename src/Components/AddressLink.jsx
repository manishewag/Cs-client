/* eslint-disable react/prop-types */


export default function AddressLink({children,className=null}) {
    if (!className) {
        className = 'px-1';
    }

    className += 'd-flex gap-2 link-underline-primary';


    return (
        <a className={className} target="_blank" href={'https://maps.google.com/?q=' + children}>
            <i className="bi bi-geo-alt"></i>{children}
        </a>
    )
}

