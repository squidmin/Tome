import React from 'react';

import { GridAutoLayout } from './GridAutoLayout';

export default {
  title: 'MUI/Grid/GridAutoLayout',
  component: GridAutoLayout,
};

const Template = (args) => <GridAutoLayout {...args} />;

export const Default = Template.bind({});

Default.args = {
  theme: 'dark',
};