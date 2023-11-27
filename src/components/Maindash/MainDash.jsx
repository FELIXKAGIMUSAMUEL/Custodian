import React from 'react'
import './MainDash.css'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'

const MainDash = () => {
  return (
    <div>
      <div className="MainDash">
        <h1>Olympia Hostel</h1>
        <Cards />
        <Table />
      </div>
    </div>
  )
}

export default MainDash
