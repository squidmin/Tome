/**
 * Use the columns props to change the default number of columns (12) in the grid.
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
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


// Change number of columns in the grid to 16:
export const GridChangeDefaultColumnAmount = ({ ...props }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={props.theme === 'dark' ? darkTheme : lightTheme}>
        <Grid container spacing={2} columns={16}>
          <Grid xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
}


GridChangeDefaultColumnAmount.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
};

GridChangeDefaultColumnAmount.defaultProps = {
  theme: 'dark',
};
