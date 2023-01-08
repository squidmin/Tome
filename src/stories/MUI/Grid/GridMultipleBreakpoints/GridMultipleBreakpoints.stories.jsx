import React from 'react';

import { GridMultipleBreakpoints } from './GridMultipleBreakpoints';

export default {
  title: 'MUI/Grid/GridMultipleBreakpoints',
  component: GridMultipleBreakpoints,
};

const Template = (args) => <GridMultipleBreakpoints {...args} />;

export const Default = Template.bind({});

Default.args = {
  theme: 'dark',
};