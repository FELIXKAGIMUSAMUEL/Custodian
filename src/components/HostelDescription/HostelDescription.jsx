// HostelDescription.jsx

import React, { useState } from 'react';
import './HostelDescription.css';

const HostelDescription = () => {
  const [description, setDescription] = useState('');

  const handleChange = (event) => {
    // Limit the description to a maximum of 50 characters
    setDescription(event.target.value.slice(0, 100));
  };

  return (
    <div className="hostel-description-container">
      <textarea
        className="hostel-description-input"
        placeholder="Enter hostel description (maximum 100 characters)"
        value={description}
        onChange={handleChange}
      />
    </div>
  );
};

export default HostelDescription;
