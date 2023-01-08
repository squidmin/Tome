import React from 'react';

import { GridOffset } from './GridOffset';

export default {
  title: 'MUI/Grid/GridOffset',
  component: GridOffset,
};

const Template = (args) => <GridOffset {...args} />;

export const Default = Template.bind({});

Default.args = {
  theme: 'dark',
};