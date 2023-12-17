import * as React from 'react';
import { useEffect,useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'
import io from 'socket.io-client';

export default function BasicTable() {
   
  const[studentBooking,setStudentBooking]=useState([])

  useEffect(() => {

    const getStudentBookingData = () => {
      const url = 'https://groupa-backend.onrender.com/getBookingData';

      // Define the options for the fetch request
      const options = {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        }
      };

      // Use the fetch API to send the POST request
      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Parse the response as JSON
        })
        .then((data) => {
          // Handle the JSON response data as needed
          console.log('Response from server:', data);
          setStudentBooking(data)
        })
        .catch((error) => {
          console.error('Error:', error);
        });

    };

    getStudentBookingData()

    const socket = io('https://groupa-backend.onrender.com', {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd"
      }
    });

    socket.on('connect', () => {
      console.log('Connected to Booking server');
    });

    socket.on('newBooking', (newData) => {
      setStudentBooking(prevData => [...prevData, newData]);
      console.log(newData);
    });

    return () => {
      console.log('Cleaning up socket connection...');
      socket.disconnect();
      console.log('Socket connection cleaned up.');
    };

  }, [setStudentBooking]);

  return (
    <div className="Table">
        <h3>Recent Booking Requests</h3>
    
    <TableContainer className='container' component={Paper}
    style={{boxShadow: '0px 13px 20px 0px #80808029'}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <div /*className="scroll"*/ >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Contact</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Gender</TableCell>
            <TableCell align="left">Room&nbsp;Type</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentBooking.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fullName}
              </TableCell>
              <TableCell align="left">{row.contact}</TableCell>
              <TableCell align="left">{row.gender}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.roomType}</TableCell>
              <TableCell align="left">{row.status? 'Approved':'Pending'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </div>
      </Table>
    </TableContainer>
    </div>
  );
}
