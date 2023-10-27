import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'

function createData(
    name,
    contact,
    email,
    roomType,
    status,
  ) {
    return { name, contact, email, roomType, status };
  }
  
  const rows = [
    createData('John Doe', '+256123456789', 'john.doe@example.com', 'Double', 'Pending'),
    createData('Jane Smith', '+256987654321', 'jane.smith@example.com', 'Single', 'Approved'),
    createData('Sam Brown', '+256777777777', 'sam.brown@example.com', 'Double', 'Rejected'),
    createData('Alex Johnson', '+256888888888', 'alex.johnson@example.com', 'Tripple', 'Pending'),
    createData('Mary Davis', '+256555555555', 'mary.davis@example.com', 'Single', 'Approved'),
  ];
 
export default function BasicTable() {
  return (
    <div className="Table">
        <h3>Recent Orders</h3>
    
    <TableContainer component={Paper}
    style={{boxShadow: '0px 13px 20px 0px #80808029'}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <div className="scroll">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Contact</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Room&nbsp;Type</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.contact}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.roomType}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </div>
      </Table>
    </TableContainer>
    </div>
  );
}
