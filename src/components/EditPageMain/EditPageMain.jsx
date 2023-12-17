import React from 'react';
import './EditPageMain.css';
import Profile from '../Profile/Profile';
import HostelDescription from '../HostelDescription/HostelDescription';
import EditGallery from '../EditGallery/EditGallery';
import RoomType from '../RoomType/RoomType';
import SaveChanges from '../SaveChanges/SaveChanges';

const EditPageMain = () => {
  return (
    <div className="edit-page-main-container">
      <h1>Profile Settings</h1>
      <Profile />
      <br /> <br />
      <hr />
      <h2>Hostel Description</h2>
      <span className='DescriptionGallery'>
        <HostelDescription />
        <EditGallery />
      </span>
      <hr />
      <h2>Room Types</h2>
      <RoomType />
      <SaveChanges />
    </div>
  );
}

export default EditPageMain;
