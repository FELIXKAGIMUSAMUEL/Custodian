// GalleryPhoto.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import './GalleryPhoto.css';

const GalleryPhoto = ({ photo, ...props }) => {
  return (
    <Card {...props}>
      <CardMedia
        component="img"
        alt="Gallery Photo"
        height="100%"
        image={URL.createObjectURL(photo)}
      />
    </Card>
  );
};

export default GalleryPhoto;
