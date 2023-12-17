// AddRoomType.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import './AddRoomType.css';

const AddRoomType = () => {
  return (
    <Card className="add-room-type-card">
      <CardContent>
        <IconButton color="primary" aria-label="add-room-type">
          <AddIcon />
        </IconButton>
        <Typography variant="subtitle1">Add Room Type</Typography>
      </CardContent>
    </Card>
  );
};

export default AddRoomType;
