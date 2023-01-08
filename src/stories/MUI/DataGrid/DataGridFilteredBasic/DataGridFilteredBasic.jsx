import * as React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider, } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { consolasFontTheme } from '../../themes/fontOverrideTheme';

import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import { columns, rows, } from '../shared/tokens/DataGrid_generic';

export const DataGridFilteredBasic = ({ ...props }) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <ThemeProvider theme={consolasFontTheme}>
        <CssBaseline />
          <DataGrid columns={props.columns} rows={props.rows} components={{ Toolbar: GridToolbar }} />
      </ThemeProvider>
    </div>
  );
}

DataGridFilteredBasic.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
};

DataGridFilteredBasic.defaultProps = {
  columns,
  rows,
};