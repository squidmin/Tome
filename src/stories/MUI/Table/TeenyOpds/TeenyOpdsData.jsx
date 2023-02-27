import * as React from 'react';
import PropTypes from 'prop-types';

import { createTheme, ThemeProvider, } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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


function createData(title, id, authorName, authorUri, rootUrl, url) {
  return { title, id, authorName, authorUri, rootUrl, url };
}

const rows = [
  createData('Luigi\'s Diary', '12345678X', 'Luigi', '/green/shirt/diary', 'luigi.org', 'luigi.org/green/shirt/diary'),
  createData('Blood of Elves', '876564321X', 'Andrzej Sapkowski', '/an/example', 'andrzejsapkowski.org', 'andrzejsapkowski.org/an/example'),
  createData('The Witcher', 'MAThlwEACAAJ', 'Luigi', '/book/url', 'thewitcher.com', 'thewitcher.com/some/kinda/tuff/guy'),
  createData('Rocket Man', 'JJTh123ACGHa', 'Elton John', '/rocket/man', 'elton.john', '/rocket/man/adventures'),
  createData('Spider Man', 'GGfehiu4ACGhF', 'Peter Parker', '/spider/man', 'peterparker.com', '/spider/man/amazing'),
];

export const TeenyOpdsData = ({ ...props }) => {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Author&nbsp;Name</TableCell>
            <TableCell align="right">Author&nbsp;URI</TableCell>
            <TableCell align="right">Root&nbsp;URL</TableCell>
            <TableCell align="right">URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.authorName}</TableCell>
              <TableCell align="right">{row.authorUri}</TableCell>
              <TableCell align="right">{row.rootUrl}</TableCell>
              <TableCell align="right"><a href={row.url}>Link</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>
  );
}

TeenyOpdsData.propTypes = {
  rows: PropTypes.array.isRequired,  
};

TeenyOpdsData.defaultProps = {
  rows,
};