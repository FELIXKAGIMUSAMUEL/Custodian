// EditGallery.jsx
import React, { useState } from 'react';
import GalleryPopUp from '../GalleryPopUp/GalleryPopUp';
import './EditGallery.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import PhotoIcon from '@mui/icons-material/Photo';

const EditGallery = () => { 
  const [openDialog, setOpenDialog] = useState(false);

  const handleCardClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className="card-container">
      <Card onClick={handleCardClick} style={{ cursor: 'pointer' }}>
        <CardContent className="card-content">
          <IconButton>
            <PhotoIcon />
          </IconButton>
          <div>Edit Gallery</div>
        </CardContent>
      </Card>

      <GalleryPopUp open={openDialog} onClose={handleCloseDialog} />
    </div>
  );
};

export default EditGallery;
