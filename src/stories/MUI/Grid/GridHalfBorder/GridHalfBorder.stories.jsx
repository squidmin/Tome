import React from 'react';

import { GridHalfBorder } from './GridHalfBorder';

export default {
  title: 'MUI/Grid/GridHalfBorder',
  component: GridHalfBorder,
};

const Template = (args) => <GridHalfBorder {...args} />;

export const Default = Template.bind({});

Default.args = {
  theme: 'light',
};