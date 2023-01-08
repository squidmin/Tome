import React from 'react';

import { GridNested } from './GridNested';

export default {
  title: 'MUI/Grid/GridNested',
  component: GridNested,
};

const Template = (args) => <GridNested {...args} />;

export const Default = Template.bind({});

Default.args = {
  theme: 'dark',
};