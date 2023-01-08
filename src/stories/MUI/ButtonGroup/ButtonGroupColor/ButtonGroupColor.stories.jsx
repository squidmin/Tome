import React from 'react';

import { ButtonGroupColor } from './ButtonGroupColor';


export default {
  title: 'MUI/ButtonGroup/ButtonGroupColor',
  component: ButtonGroupColor,
};

const Template = (args) => <ButtonGroupColor {...args} />


export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  color: 'secondary',
  ariaLabel: 'outlined primary button group',
};