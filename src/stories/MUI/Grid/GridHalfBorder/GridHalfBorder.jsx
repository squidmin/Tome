/**
 * 
 */


import * as React from 'react';
import PropTypes from 'prop-types';


import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';


import { ThemeProvider, } from '@mui/material/styles';


import { lightTheme, darkTheme, } from '../../themes/commonThemes';


export const GridHalfBorder = ({ ...props }) => {
  const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 };
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={(theme) => ({
          '--Grid-borderWidth': '1px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
            ...Object.keys(colWidth).reduce(
              (result, key) => ({
                ...result,
                [`&:nth-of-type(${12 / colWidth[key]}n)`]: {
                  [theme.breakpoints.only(key)]: {
                    borderRight: 'none',
                  },
                },
              }),
              {},
            ),
          },
        })}
      >
        {[...Array(6)].map((_, index) => (
          <Grid key={index} {...colWidth} minHeight={160} />
        ))}
      </Grid>
    </Box>
  );
}

 
GridHalfBorder.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
};

GridHalfBorder.defaultProps = {
  theme: 'light',
};
