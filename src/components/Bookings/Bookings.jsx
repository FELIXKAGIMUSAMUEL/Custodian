import React from 'react'
import './Bookings.css'
import Booking from '../Booking/Booking'
// import Records from '../Records/Records'

const Bookings = () => {
  return (
    <div>
      <div className="MainDash">
        <h1>Olympia Hostel</h1>
        <Booking />
        {/* <Records /> */}
      </div>
    </div>
  )
}

export default Bookings
