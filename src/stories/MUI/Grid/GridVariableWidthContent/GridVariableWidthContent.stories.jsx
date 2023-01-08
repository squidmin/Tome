import React from 'react';

import { GridVariableWidthContent } from './GridVariableWidthContent';

export default {
  title: 'MUI/Grid/GridVariableWidthContent',
  component: GridVariableWidthContent,
};

const Template = (args) => <GridVariableWidthContent {...args} />;

export const Default = Template.bind({});

Default.args = {
  theme: 'dark',
};