import React from 'react';
import PropTypes from 'prop-types';

import HttpStatusIndicatorTable from '../Table/HttpStatusIndicatorTable';


const createData = (endpointName, endpoint, status) => { return { endpointName, endpoint, status }; };

const rows = [
  createData('Google', 'http://www.google.com', 200),
  createData('Amazon', 'http://www.amazon.com', 200),
  createData('Docker', 'http://www.docker.com', 400),
  createData('GitHub', 'http://www.github.com', 500),
];


export const HttpStatusIndicator = ({ ...props }) => {
  return (
    <HttpStatusIndicatorTable rows={rows} />
  );
};


HttpStatusIndicator.propTypes = {
  rows: PropTypes.array.isRequired,
};

HttpStatusIndicator.defaultProps = {
  rows,
};