import React, { useState } from 'react';
import GalleryPhoto from '../GalleryPhoto/GalleryPhoto';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import './GalleryPopUp.css';

const GalleryPopUp = ({ open, onClose }) => {
  const [photos, setPhotos] = useState([]);

  const handleAddPhoto = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && photos.length < 20) {
      const newPhotos = [...photos, selectedFile];
      setPhotos(newPhotos);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="gallery-popup"
      // Set the width and height of the dialog
      sx={{ width: '90%', height: '90%', overflow: 'hidden' }}
      // Set background color and opacity of the overlay
      PaperProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.7)' } }}
    >
      <div className="dialog-content">
        <h2 className='galleryName'>The Gallery</h2>
        <div className="gallery-container">
          {photos.map((photo, index) => (
            <GalleryPhoto
              key={index}
              photo={photo}
              // Remove explicit width and height styles
              sx={{ margin: '5px' }}
            />
          ))}
        </div>
        <label htmlFor="file-input">
          <Button variant="contained" component="span">
            Add Photo
          </Button>
        </label>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleAddPhoto}
        />
      </div>
    </Dialog>
  );
};

export default GalleryPopUp;
