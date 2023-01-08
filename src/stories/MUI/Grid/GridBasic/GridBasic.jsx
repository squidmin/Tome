/**
 * The Material Design responsive layout grid adapts to screen size and orientation, ensuring
 *   consistency across layouts.
 * The grid creates visual consistency between layouts while allowing flexibility across a
 *   wide variety of designs.
 * Material Design's responsive UI is based on a 12-column grid layout.
 * 
 * More info:
 * - https://material.io/design/layout/responsive-layout-grid.html#columns-gutters-and-margins
 * - https://mui.com/material-ui/react-grid/#how-it-works
 */


import * as React from 'react';
import PropTypes from 'prop-types';


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';


import { ThemeProvider, } from '@mui/material/styles';


import { lightTheme, darkTheme, } from '../../themes/commonThemes';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),  // Use the spacing prop to control the space between children.
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export const GridBasic = ({ ...props }) => {
  return (
    <Box sx={{ flexGrow: 1 }}> 
      <ThemeProvider theme={props.theme === 'dark' ? darkTheme : lightTheme}>
        <Grid container spacing={2}>
          <Grid xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
}


GridBasic.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
};

GridBasic.defaultProps = {
  theme: 'dark',
};
