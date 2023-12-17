import React from "react";
import "./Notifications.css";
import { useState,useEffect } from "react";
// import { NotificationsData } from "../../Data/Data";
import NotificationCard from "./NotificationCard";
import io from 'socket.io-client';

const Notifications = () => {
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
      <div className="Notifications">
      {studentBooking.map((update) => 
        update.notification ? <NotificationCard key={update.id} update={update} /> : null
      )}
    </div>
    
    );
};

export default Notifications;
