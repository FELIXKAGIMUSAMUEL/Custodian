import * as React from 'react';
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
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import './Booking.css';

function createData(
  name,
  contact,
  roomType,
  status,
  floor,
  paidAmount
) {
  return { name, contact, roomType, status, floor, paidAmount };
}

const rows = [
  createData('John Doe', '+256123456789', 'Double', 'Pending', '2nd', 200000),
  createData('Jane Smith', '+256987654321', 'Single', 'Approved', '1st', 150000),
  createData('Sam Brown', '+256777777777', 'Double', 'Rejected', '3rd', 250000),
  createData('Alex Johnson', '+256888888888', 'Triple', 'Pending', '2nd', 180000),
  createData('Mary Davis', '+256555555555', 'Single', 'Approved', '3rd', 220000),
  createData('David Johnson', '+256777777777', 'Double', 'Rejected', '1st', 250000),
  createData('Sarah Davis', '+256555555555', 'Single', 'Approved', '2nd', 220000),
  createData('James Doe', '+256123456789', 'Double', 'Pending', '3rd', 200000),
  createData('Grace Smith', '+256987654321', 'Single', 'Approved', '2nd', 150000),
  createData('Chris Brown', '+256777777777', 'Double', 'Rejected', '1st', 250000),
  createData('Alex Doe', '+256888888888', 'Triple', 'Pending', '3rd', 180000),
  createData('Eve Davis', '+256555555555', 'Single', 'Approved', '1st', 220000),
  createData('Paul Johnson', '+256777777777', 'Double', 'Rejected', '2nd', 250000),
];

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Bookings</h3>

      <div className="search">
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          style={{ marginRight: '10px' }}
        />
        <Button
          variant="contained"
          color="success"
          endIcon={<SearchIcon />}
        >
          Search
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
              <TableCell align="left">Floor</TableCell>
              <TableCell align="left">Paid</TableCell>
              <TableCell align="left">&nbsp; </TableCell>
              <TableCell align="left">&nbsp; </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.contact}</TableCell>
                <TableCell align="left">{row.roomType}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left">{row.floor}</TableCell>
                <TableCell align="left">{row.paidAmount}</TableCell>
                <TableCell align="left">
                  <Button
                    variant="contained"
                    style={{ backgroundColor: 'green', color: 'white' }}
                    startIcon={<DoneIcon />}
                  >
                    Accept
                  </Button>
                </TableCell>
                <TableCell align="left">
                  <Button
                    variant="contained"
                    style={{ backgroundColor: 'red', color: 'white' }}
                    startIcon={<CloseIcon />}
                  >
                    Reject
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
