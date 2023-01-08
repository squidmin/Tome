import * as React from 'react';
import PropTypes from 'prop-types';


import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


export const ContainerFixed = ({ ...props }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}


ContainerFixed.propTypes = {

};

ContainerFixed.defaultProps = {

};
