import * as React from 'react';
import PropTypes from 'prop-types';


import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';


import { ThemeProvider, } from '@mui/material/styles';


import { lightTheme, darkTheme, } from '../../themes/commonThemes';


export const GridFullBorder = ({ ...props }) => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <ThemeProvider theme={props.theme === 'dark' ? darkTheme : lightTheme}>
        <Grid
          container
          spacing={2}
          sx={{
            '--Grid-borderWidth': '1px',
            borderTop: 'var(--Grid-borderWidth) solid',
            borderLeft: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
            '& > div': {
              borderRight: 'var(--Grid-borderWidth) solid',
              borderBottom: 'var(--Grid-borderWidth) solid',
              borderColor: 'divider',
            },
          }}
        >
          {[...Array(6)].map((_, index) => (
            <Grid key={index} {...{ xs: 12, sm: 6, md: 4, lg: 3 }} minHeight={160} />
          ))}
        </Grid>
      </ThemeProvider>
    </Box>
  );
}


GridFullBorder.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
};

GridFullBorder.defaultProps = {
  theme: 'light',
};
