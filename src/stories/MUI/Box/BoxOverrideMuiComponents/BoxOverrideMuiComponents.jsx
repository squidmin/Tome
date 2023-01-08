/**
 * The Box component wraps your component. It creates a new DOM element, a <div> that by default
 *   can be changed with the "component" prop.
 */


import * as React from 'react';
import PropTypes from 'prop-types';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export const BoxOverrideMuiComponents = ({ ...props }) => {
  return (
    // Using a <span> instead of the default <div>.
    <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <Button>Save</Button>
    </Box>
  );
}


BoxOverrideMuiComponents.propTypes = {

};

BoxOverrideMuiComponents.defaultProps = {

};
