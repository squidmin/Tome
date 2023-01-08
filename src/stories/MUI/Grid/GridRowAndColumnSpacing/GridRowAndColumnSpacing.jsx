/**
 * The rowSpacing and columnSpacing props let you specify row and column gaps independenctly of one another.
 * They behave similarly to the row-gap and column-gap properties of CSS Grid.
 *   - https://mui.com/system/grid/#row-gap-amp-column-gap
 */


import * as React from 'react';
import PropTypes from 'prop-types';


import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


import { ThemeProvider, } from '@mui/material/styles';


import { lightTheme, darkTheme, } from '../../themes/commonThemes';
 

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
 

export const GridRowAndColumnSpacing = ({ ...props }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <ThemeProvider theme={props.theme === 'dark' ? darkTheme : lightTheme}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6}>
            <Item>1</Item>
          </Grid>
          <Grid xs={6}>
            <Item>2</Item>
          </Grid>
          <Grid xs={6}>
            <Item>3</Item>
          </Grid>
          <Grid xs={6}>
            <Item>4</Item>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
}


GridRowAndColumnSpacing.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
};

GridRowAndColumnSpacing.defaultProps = {
  theme: 'dark',
};
