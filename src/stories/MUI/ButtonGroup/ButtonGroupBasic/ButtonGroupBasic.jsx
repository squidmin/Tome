import * as React from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
  <Button key='1'>One</Button>,
  <Button key='2'>Two</Button>,
  <Button key='3'>Three</Button>,
];

export const ButtonGroupBasic = ({ ...props }) => {
  return (
    <div style={{}}>
      <ButtonGroup size={props.size} variant={props.variant} aria-label={props.ariaLabel}>
        {buttons}
      </ButtonGroup>
    </div>
  );
};

ButtonGroupBasic.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  variant: PropTypes.oneOf(['text', 'contained', 'outlined']).isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

ButtonGroupBasic.defaultProps = {
  size: 'medium',
  variant: 'text',
  ariaLabel: 'outlined primary button group',
};