/**
 * 
 */


import * as React from 'react';
import PropTypes from 'prop-types';


import { styled } from '@mui/material/styles';
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


export const GridOffset = ({ ...props }) => {
  return (
    <ThemeProvider theme={props.theme === 'dark' ? darkTheme : lightTheme}>
      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
        <Grid xs={6} xsOffset={3} md={2} mdOffset={0}>
          <Item>1</Item>
        </Grid>
        <Grid xs={4} md={2} mdOffset="auto">
          <Item>2</Item>
        </Grid>
        <Grid xs={4} xsOffset={4} md={2} mdOffset={0}>
          <Item>3</Item>
        </Grid>
        <Grid xs md={6} mdOffset={2}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}


GridOffset.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
};

GridOffset.defaultProps = {
  theme: 'dark',
};
 