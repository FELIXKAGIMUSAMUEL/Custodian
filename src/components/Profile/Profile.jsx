import React, { useState } from 'react';
import './Profile.css';
import IconButton from '@mui/material/IconButton';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import coverphoto from '../../imgs/coverphoto.jpg';
import logophoto from '../../imgs/logophoto.jpg';

const Profile = () => {
  const [coverPhoto, setCoverPhoto] = useState(coverphoto);
  const [logo, setLogo] = useState(logophoto);

  const handleCoverPhotoChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Read the selected file
      const reader = new FileReader();
      reader.onload = (e) => {
        setCoverPhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Read the selected file
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogo(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="cover-photo" style={{ backgroundImage: `url(${coverPhoto})` }}>
        {coverPhoto === 'url-to-default-cover-photo' && (
          <div className="default-overlay">
            <span>Upload Cover Photo</span>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          id="cover-photo-input"
          style={{ display: 'none' }}
          onChange={handleCoverPhotoChange}
        />
        <label htmlFor="cover-photo-input">
          <IconButton component="span" className="change-photo-btn">
            <InsertPhotoIcon />
            Cover Photo
          </IconButton>
        </label>
      </div>
      <div className="logo-container">
        <div className="Editlogo" style={{ backgroundImage: `url(${logo})` }}>
          {logo === 'url-to-default-logo' && (
            <div className="default-overlay">
              <span>Upload Logo</span>
            </div>
          )}
        </div>
      </div>
      <input
        type="file"
        accept="image/*"
        id="logo-input"
        style={{ display: 'none' }}
        onChange={handleLogoChange}
      />
      <label htmlFor="logo-input">
        <IconButton component="span" className="change-photo-btn outside-icon">
          <InsertPhotoIcon />
          Logo
        </IconButton>
      </label>
    </div>
  );
};

export default Profile;
