import React from 'react';

import { ButtonGroupBasic } from './ButtonGroupBasic';


export default {
  title: 'MUI/ButtonGroup/ButtonGroupBasic',
  component: ButtonGroupBasic,
};

const Template = (args) => <ButtonGroupBasic {...args} />


export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  variant: 'text',
  ariaLabel:'outlined primary button group',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  variant: 'text',
  ariaLabel:'small primary button group',
};

export const SmallSecondary = Template.bind({});
SmallSecondary.args = {
  size: 'small',
  variant: 'text',
  ariaLabel:'small outlined secondary button group',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  variant: 'text',
  ariaLabel:'medium primary button group',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  variant: 'text',
  ariaLabel:'large primary button group',
};