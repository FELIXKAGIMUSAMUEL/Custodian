import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './RoomTypeCards.css';

const RoomTypeCards = ({ title }) => {
  const [roomsAvailable, setRoomsAvailable] = useState(0);

  const handleIncrement = () => {
    setRoomsAvailable((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (roomsAvailable > 0) {
      setRoomsAvailable((prevCount) => prevCount - 1);
    }
  };

  return (
    <Card className="room-type-card">
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          Pricing:
        </Typography>
        <TextField
          label="Semester"
        />
        <TextField
          label="Month"
        />
        <TextField
          label="Rooms Available"
          value={roomsAvailable}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton
                  aria-label="decrement"
                  onClick={handleDecrement}
                  size="small"
                >
                  <RemoveIcon />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="increment"
                  onClick={handleIncrement}
                  size="small"
                >
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </CardContent>
    </Card>
  );
};

export default RoomTypeCards;
