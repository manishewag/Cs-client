/* eslint-disable react/prop-types */
import { differenceInCalendarDays, format } from "date-fns";

export default function BookingDates({booking}) {
    return (
        <>
        <div className="d-flex fw-lighter mt-4">
            <div className=" d-flex gap-2">
                <i className="bi bi-moon-fill"></i>
                {differenceInCalendarDays(new Date(booking.checkOut), new Date(booking.checkIn))} nights :
            </div>

            <div className="d-flex px-2">
                <div className="d-flex gap-2">
                    <i className="bi bi-calendar-week-fill"></i>
                    {format(new Date(booking.checkIn), 'yyyy-MM-dd')} -&gt;
                </div>
                <div className="d-flex gap-2 px-2">
                    <i className="bi bi-calendar-week-fill"></i>
                    {format(new Date(booking.checkOut), 'yyyy-MM-dd')}
                </div>
            </div>
        </div>

        </>
    )
}
