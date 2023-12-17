import React from 'react';
import RoomTypeCards from '../RoomTypeCards/RoomTypeCards';
import AddRoomType from '../AddRoomType/AddRoomType';
import './RoomType.css';

const RoomType = () => {
  return (
    <div className="main-page-container">
      <div className="room-type-container">
        <div className="room-type-row">
          <RoomTypeCards title="Single" />
          <RoomTypeCards title="Double" />
        </div>
        <div className="room-type-row">
          <RoomTypeCards title="Triple" />
          <RoomTypeCards title="Quadriple" />
        </div>
      </div>
      <AddRoomType />
    </div>
  );
};

export default RoomType;
