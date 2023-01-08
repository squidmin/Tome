/**
 * To center a grid's content, specify display="flex" directly on the item.
 * Then use justifyContent and/or alignItems to adjust the position of the content, as shown below.
 * 
 * Note:
 *   Using the container prop does not work in this situation because the grid container is
 *   designed exclusively to wrap grid items. It cannot wrap other elements.
 */


import * as React from 'react';
import PropTypes from 'prop-types';


import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';


import { ThemeProvider, } from '@mui/material/styles';


import { lightTheme, darkTheme, } from '../../themes/commonThemes';


export const GridCenteredElements = ({ ...props }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={props.theme === 'dark' ? darkTheme : lightTheme}>
        <Grid container spacing={2} minHeight={160}>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <Avatar src="ramza_1.jpeg" />
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center">
            <Avatar src="sonic_1.jpeg" />
          </Grid>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <Avatar src="monkey_1.png" />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
}


GridCenteredElements.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
};

GridCenteredElements.defaultProps = {
  theme: 'dark',
};
