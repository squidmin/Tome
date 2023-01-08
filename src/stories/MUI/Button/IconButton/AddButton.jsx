import * as React from 'react';


import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';


export const AddButton = ({ ...props }) => {
  return (
    <IconButton color="primary" aria-label="example">
      <AddIcon />
    </IconButton>
  );
}


AddButton.propTypes = {};

AddButton.defaultProps = {};
