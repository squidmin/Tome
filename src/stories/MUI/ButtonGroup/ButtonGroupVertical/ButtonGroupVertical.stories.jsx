import React from 'react';

import { ButtonGroupVertical } from './ButtonGroupVertical';


export default {
  title: 'MUI/ButtonGroup/ButtonGroupVertical',
  component: ButtonGroupVertical,
};

const Template = (args) => <ButtonGroupVertical {...args} />


export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  variant: 'text',
  ariaLabel: 'vertical outlined button group',
};