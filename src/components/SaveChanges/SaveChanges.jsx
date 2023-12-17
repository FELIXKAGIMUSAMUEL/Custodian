import React from 'react';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import './SaveChanges.css';

const SaveChanges = () => {
  return (
    <div className="save-changes-container">
      <Button
        variant="contained"
        style={{ backgroundColor: 'rgb(186, 240, 155) ', color: '#000' }}
        size="large"
        startIcon={<SaveIcon />}
      >
        Save Changes
      </Button>
    </div>
  );
};

export default SaveChanges;
