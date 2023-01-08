/**
 * The auto-layout feature gives equal space to all items present.
 * When you set the width of one item, the others will automatically resize to match it.
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

export const GridAutoLayout = ({ ...props }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={props.theme === 'dark' ? darkTheme : lightTheme}>
        <Grid container spacing={3}>
          <Grid xs>
            <Item>xs</Item>
          </Grid>
          <Grid xs={6}>
            <Item>xs=6</Item>
          </Grid>
          <Grid xs>
            <Item>xs</Item>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
}


GridAutoLayout.propTypes = {

};

GridAutoLayout.defaultProps = {

};
