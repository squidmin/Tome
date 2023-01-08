import * as React from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
  <Button key='1'>One</Button>,
  <Button key='2'>Two</Button>,
  <Button key='3'>Three</Button>,
];

export const ButtonGroupColor = ({ ...props }) => {
  return (
    <ButtonGroup size='small' aria-label='small button group'>
      {buttons}
    </ButtonGroup>
  );
};

ButtonGroupColor.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  color: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
};

ButtonGroupColor.defaultProps = {
  size: 'medium',
  color: 'secondary',
  ariaLabel: 'outlined primary button group',
};