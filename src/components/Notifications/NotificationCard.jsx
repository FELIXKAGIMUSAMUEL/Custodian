import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// Helper function to calculate time difference
const calculateTimeDifference = (storedTimestamp) => {
  // Get the current timestamp
  const currentTimestamp = new Date();

  // Calculate the time difference in milliseconds
  const timeDifferenceMs = currentTimestamp - new Date(storedTimestamp);

  const calculatedTimeDifferenceMinutes = Math.floor(timeDifferenceMs / (1000 * 60));

  // Convert milliseconds to minutes
  if (calculatedTimeDifferenceMinutes >= 30) {
    // Return the calculated hours with the unit
    const calculatedHours = Math.floor(calculatedTimeDifferenceMinutes / 60);
    return `${calculatedHours} ${calculatedHours === 1 ? 'hour' : 'hours'}`;
  }

  // Return the original calculated time difference in minutes with the unit
  return `${calculatedTimeDifferenceMinutes===0?'Just now':`${calculatedTimeDifferenceMinutes} ${calculatedTimeDifferenceMinutes === 1 ? 'minute ago' : 'minutes ago'}`}`;
};

function NotificationCard({ update }) {
  const [timeDifference, setTimeDifference] = useState(null);

  useEffect(() => {
    // Calculate the time difference when the update.timestamp changes
    setTimeDifference(calculateTimeDifference(update.timeStamp));
  }, [update.timeStamp]);

  return (
    <div className="update">
      <CloseRoundedIcon/>
      <div className="noti">
        <div style={{ marginBottom: "0.5rem" }}>
          <span className="name">{update.fullName}</span> &nbsp;
          <span>has sent UGX {update.depositAmount} for booking</span>
        </div>
        <div>
          <span>
            {timeDifference !== null
              ? `${timeDifference}`
              : "Calculating..."}
          </span>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default NotificationCard;
