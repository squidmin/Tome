/**
 * You can set prop values to change when a given breakpoint is active.
 * For instance, we can implement Material Design's recommended responsive layout grid,
 *   as shown in this file.
 */


import * as React from 'react';
import PropTypes from 'prop-types';


import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';


import { ThemeProvider, } from '@mui/material/styles';


import { lightTheme, darkTheme, } from '../../themes/commonThemes';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export const GridResponsiveValues = ({ ...props }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={props.theme === 'dark' ? darkTheme : lightTheme}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Item>xs=2</Item>
          </Grid>
        ))}
      </Grid>
      </ThemeProvider>
    </Box>
  );
}


GridResponsiveValues.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
};

GridResponsiveValues.defaultProps = {
  theme: 'dark',
};
