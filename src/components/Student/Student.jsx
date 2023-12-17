// Student.jsx
import React from 'react';
import Button from '@mui/material/Button';
import './Student.css';

const Student = ({ student, onClose }) => {
  const handleCheckIn = () => {
    // Handle check-in logic here
    // Update the status to 'checked-in'
    onClose();
  };

  const handleCheckOut = () => {
    // Handle check-out logic here
    // Update the status to 'checked-out'
    onClose();
  };

  return (
    <div className="student-popup">
      <div className="student-details">
        <h2>{student.name}</h2>
        <p>Contact: {student.contact}</p>
        <p>Room Type: {student.roomType}</p>
        <p>Status: {student.status}</p>
      </div>
      {student.status === 'booked' && (
        <Button variant="contained" onClick={handleCheckIn}>
          Check In
        </Button>
      )}
      {student.status === 'checked-in' && (
        <Button variant="contained" onClick={handleCheckOut}>
          Check Out
        </Button>
      )}
      <Button variant="contained" onClick={onClose}>
        Close
      </Button>
    </div>
  );
};

export default Student;
