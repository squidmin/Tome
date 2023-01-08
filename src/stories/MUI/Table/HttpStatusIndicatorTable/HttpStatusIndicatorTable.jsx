import React from 'react';
import PropTypes from 'prop-types';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import CircleIcon from '@mui/icons-material/Circle';


const columnNames = [ 'Name', 'URL', 'Status' ];

const createRows = (name, url, status) => { return { name, url, status }; };

const rows = [
  createRows('Amazon', 'http://www.amazon.com', 200),
  createRows('Docker', 'http://www.docker.com', 400),
  createRows('Google', 'http://www.google.com', 200),
  createRows('GitHub', 'http://www.github.com', 500),
];


export const HttpStatusIndicatorTable = ({ ...props }) => {
  const columnNames = props.columnNames; 
  const rows = props.rows;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align='left'>{columnNames[0]}</TableCell>
            {
              columnNames.slice(1, columnNames.length)
                .map((columnName) => ( <TableCell align='right'>{columnName}</TableCell> ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left"><code style={{ fontSize: '12px' }}>{row.name}</code></TableCell>
              <TableCell align="right"><code style={{ fontSize: '12px' }}>{row.url}</code></TableCell>
              <TableCell align="right">
                <CircleIcon style={{ color: row.status === 200 ? 'green' : 'red' }} />
                &nbsp;<code style={{ fontSize: '12px' }}>{row.status}</code>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};


HttpStatusIndicatorTable.propTypes = {
  columnNames: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
};

HttpStatusIndicatorTable.defaultProps = {
  columnNames,
  rows,
};