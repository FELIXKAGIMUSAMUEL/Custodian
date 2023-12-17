import React from 'react';
import './EditPageSide.css';

const EditPageSide = () => {
  const sendEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div>
      <br /> <br /> <br />
      <h3>More Options ...</h3>
      <hr />
      <br />
      <div className='EditPageSide'>Change Password</div>
      <br />
      <div className='EditPageSide' onClick={() => sendEmail('kagiflex@gmail.com')}>
        Email Dean
      </div>
      <br />
      <div className='EditPageSide' onClick={() => sendEmail('kagiflex@gmail.com')}>
        Contact HostelEase
      </div>
    </div>
  );
};

export default EditPageSide;
