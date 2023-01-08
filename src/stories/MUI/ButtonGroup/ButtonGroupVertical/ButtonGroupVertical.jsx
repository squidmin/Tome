import * as React from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
  <Button key='1'>One</Button>,
  <Button key='2'>Two</Button>,
  <Button key='3'>Three</Button>,
];

export const ButtonGroupVertical = ({ ...props }) => {
  return (
    <ButtonGroup size={props.size} variant={props.variant} orientation='vertical' aria-label={props.ariaLabel}>
      {buttons}
    </ButtonGroup>
  );
};

ButtonGroupVertical.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
  ariaLabel: PropTypes.string,
};

ButtonGroupVertical.defaultProps = {
  size: 'medium',
  variant: 'text',
  ariaLabel: 'vertical outlined button group',
};