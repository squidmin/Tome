import React from 'react';

import { ButtonBasic } from './ButtonBasic';


export default {
  title: 'MUI/Button/ButtonBasic',
  component: ButtonBasic,
};

const Template = (args) => <ButtonBasic {...args} />


export const Plain = Template.bind({});
Plain.args = {
  variant: 'text',
};