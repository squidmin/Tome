/**
 * The Box component serves as a wrapper component for most of the CSS utility needs.
 * This component packages all the style functions that are exposed in @mui/system.
 *   - https://mui.com/system/properties/
 */

import * as React from 'react';
import PropTypes from 'prop-types';


import Box from '@mui/material/Box';


export const BoxBasic = ({ ...props }) => {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
  );
}


BoxBasic.propTypes = {

};

BoxBasic.defaultProps = {
  
};