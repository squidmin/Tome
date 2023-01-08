import * as React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider, } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import { consolasFontTheme } from '../../themes/fontOverrideTheme';

import { columns, rows, } from '../shared/tokens/DataGrid_generic';  // Test data


export const DataGridBasic = ({ ...props }) => {
  return (
    <div>
    <ThemeProvider theme={consolasFontTheme}>
      <CssBaseline />
      <div style={{ height: 400, width: '100%' }}>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            experimentalFeatures={{ newEditingApi: true }}
            rows={props.rows}
            columns={props.columns}
            pageSize={props.pageSize}
            rowsPerPageOptions={props.rowsPerPageOptions}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
      </div>
    </ThemeProvider>
    </div>
  );
};


DataGridBasic.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  rowsPerPageOptions: PropTypes.array.isRequired,
};

DataGridBasic.defaultProps = {
  columns,
  rows,
  pageSize: 5,
  rowsPerPageOptions: [5],
};