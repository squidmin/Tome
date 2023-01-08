import React from 'react';

import { GridCenteredElements } from './GridCenteredElements';

export default {
  title: 'MUI/Grid/GridCenteredElements',
  component: GridCenteredElements,
};

const Template = (args) => <GridCenteredElements {...args} />;

export const Default = Template.bind({});

Default.args = {
  theme: 'dark',
};
