import React from 'react';

import { GridRowAndColumnSpacing, } from './GridRowAndColumnSpacing';

export default {
  title: 'MUI/Grid/GridRowAndColumnSpacing',
  component: GridRowAndColumnSpacing,
};

const Template = (args) => <GridRowAndColumnSpacing {...args} />;

export const Default = Template.bind({});

Default.args = {
  theme: 'dark',
};
