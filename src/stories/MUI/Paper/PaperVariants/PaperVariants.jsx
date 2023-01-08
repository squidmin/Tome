import * as React from 'react';
import PropTypes from 'prop-types';


import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


export const PaperVariants = ({ ...props }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper variant="outlined" />
      <Paper variant="outlined" square />
      <Paper />
      <Paper elevation={3} />
    </Box>
  );
}


PaperVariants.propTypes = {};

PaperVariants.defaultProps = {};
