import * as React from 'react';
import PropTypes from 'prop-types';

import { createTheme, ThemeProvider, } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


/* Custom MUI font theme */
import Consolas from '../../../../assets/font/Consolas.woff';

const theme = createTheme({
  typography: {
    fontFamily: 'Consolas',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Consolas';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Consolas'), local('Consolas-Regular'), url(${Consolas}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    }
  },
});


export const DataGridFlexLayout = ({ ...props }) => {

  return (
    <div style={{ height: 400, width: '100%' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid
              experimentalFeatures={{ newEditingApi: true }}
              rows={props.rows}
              columns={props.columns}
              pageSize={props.pageSize}
              rowsPerPageOptions={props.rowsPerPageOptions}
              checkboxSelection
              disableSelectionOnClick
              />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}


DataGridFlexLayout.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  rowsPerPageOptions: PropTypes.array.isRequired,
};

const columns = [
  { field: 'id', headerName: 'ID', width: 70, },
  { field: 'firstName', headerName: 'First name', width: 130, },
  { field: 'lastName', headerName: 'Last name', width: 130, },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

DataGridFlexLayout.defaultProps = {
  columns,
  rows,
  pageSize: 5,
  rowsPerPageOptions: [5],
};