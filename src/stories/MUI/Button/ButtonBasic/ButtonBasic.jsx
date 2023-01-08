import * as React from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';

export const ButtonBasic = ({ ...props }) => {
  return (
    <div style={{}}>
      <Button variant={props.variant}>Text</Button>
    </div>
  );
};

ButtonBasic.propTypes = {
  variant: PropTypes.oneOf(['text', 'contained', 'outlined']).isRequired,
};

ButtonBasic.defaultProps = {
  variant: 'text',
};