import React from 'react';

import { GridFullBorder } from './GridFullBorder';

export default {
  title: 'MUI/Grid/GridFullBorder',
  component: GridFullBorder,
};

const Template = (args) => <GridFullBorder {...args} />;

export const Default = Template.bind({});

Default.args = {
  theme: 'light',
};