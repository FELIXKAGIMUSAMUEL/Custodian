// EditPage.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import './EditPage.css';

const EditPage = () => {
  return (
    <div className="EditPage">
      <div className="hostelName">
        <h1>New Nana Hostel</h1>
      </div>

      <div className="hostelInfo">
        <h2>Edit Hostel Info</h2>
        <textarea rows="4" cols="50" placeholder="Enter hostel description..." />
      </div>

      <div className="coverPhoto">
        <Card>
          <CardMedia
            component="img"
            alt="Cover Photo"
            height="140"
            image="coverphoto.png"
          />
          <CardContent>
            <Button variant="contained" startIcon={<AddIcon />}>
              Change Cover Photo
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="roomTypes">
        <h2>Available Room Types</h2>
        <div className="roomTypeCards">
          <Card>
            <CardMedia
              component="img"
              alt="Single Room"
              height="140"
              src='single_room.jpg'
            />
            <CardContent>
              <h3>Single Room</h3>
              <div className="availableRooms">
                <label>Available Rooms</label>
                <input type="number" min="0" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardMedia
              component="img"
              alt="Double Room"
              height="140"
              image='double_room.jpg'
            />
            <CardContent>
              <h3>Double Room</h3>
              <div className="availableRooms">
                <label>Available Rooms</label>
                <input type="number" min="0" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardMedia
              component="img"
              alt="Triple Room"
              height="140"
              image='triple_room.jpg'
            />
            <CardContent>
              <h3>Triple Room</h3>
              <div className="availableRooms">
                <label>Available Rooms</label>
                <input type="number" min="0" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="addRoomType">
          <Card>
            <CardContent>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
              >
                Add Room Type
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="saveButton">
        <Button variant="contained" color="info" startIcon={<SaveIcon />}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditPage;
