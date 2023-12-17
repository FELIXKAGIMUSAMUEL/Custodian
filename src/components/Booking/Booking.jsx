// Booking.jsx
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Student from '../Student/Student';
import './Booking.css';

const createData = (name, contact, roomType, status, paidAmount) => {
  return { name, contact, roomType, status, paidAmount };
};

// ... Add more rows as needed
const rows = [
  createData('John Doe', '+256123456789', 'Double', 'checked-in', 200000),
  createData('Jane Smith', '+256987654321', 'Single', 'checked-out', 150000),
  createData('Sam Brown', '+256777777777', 'Double', 'booked', 250000),
  createData('Alex Johnson', '+256888888888', 'Triple', 'booked', 180000),
  createData('Mary Davis', '+256555555555', 'Single', 'checked-in', 220000),
  createData('David Johnson', '+256777777777', 'Double', 'checked-out', 250000),
  createData('Sarah Davis', '+256555555555', 'Single', 'booked', 220000),
  createData('James Doe', '+256123456789', 'Double', 'checked-in', 200000),
  createData('Grace Smith', '+256987654321', 'Single', 'checked-out', 150000),
  createData('Chris Brown', '+256777777777', 'Double', 'booked', 250000),
  createData('Alex Doe', '+256888888888', 'Triple', 'checked-in', 180000),
  createData('Eve Davis', '+256555555555', 'Single', 'checked-out', 220000),
  createData('Paul Johnson', '+256777777777', 'Double', 'booked', 250000),
];

const Booking = () => {
  const [filteredRows, setFilteredRows] = useState(rows);
  const [searchText, setSearchText] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleSearch = () => {
    const filteredData = rows.filter((row) =>
      row.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRows(filteredData);
  };

  const handleStatusFilter = (selectedStatus) => {
    setActiveFilter(selectedStatus);
    if (selectedStatus === 'All') {
      setFilteredRows(rows);
    } else {
      const filteredData = rows.filter((row) => row.status === selectedStatus);
      setFilteredRows(filteredData);
    }
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleRowClick = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseStudentPopup = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="Table">
      <h2>Booking Records</h2>

      <div className="search">
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          style={{ marginRight: '10px' }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={handleEnterKeyPress}
        />
        <Button
          variant="contained"
          style={{ backgroundColor: 'rgb(186, 240, 155)', color: '#000' }}
          endIcon={<SearchIcon />}
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>

      <div className="filter">
        <Button
          className={activeFilter === 'All' ? 'active-filter' : ''}
          onClick={() => handleStatusFilter('All')}
        >
          All
        </Button>
        <Button
          className={activeFilter === 'booked' ? 'active-filter' : ''}
          onClick={() => handleStatusFilter('booked')}
        >
          Booked
        </Button>
        <Button
          className={activeFilter === 'checked-in' ? 'active-filter' : ''}
          onClick={() => handleStatusFilter('checked-in')}
        >
          Checked In
        </Button>
        <Button
          className={activeFilter === 'checked-out' ? 'active-filter' : ''}
          onClick={() => handleStatusFilter('checked-out')}
        >
          Checked Out
        </Button>
      </div>

      <TableContainer component={Paper} className="TableContainerr" style={{ boxShadow: '0px 13px 20px 0px #80808029' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Contact</TableCell>
              <TableCell align="left">Room&nbsp;Type</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Paid</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow key={row.name} onClick={() => handleRowClick(row)}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.contact}</TableCell>
                <TableCell align="left">{row.roomType}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left">{row.paidAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody> 
        </Table>
      </TableContainer>

      {selectedStudent && (
        <Student student={selectedStudent} onClose={handleCloseStudentPopup} />
      )}
    </div>
  );
};

export default Booking;
