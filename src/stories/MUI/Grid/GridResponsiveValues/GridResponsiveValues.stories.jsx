import React from 'react';

import { GridResponsiveValues } from './GridResponsiveValues';

export default {
  title: 'MUI/Grid/GridResponsiveValues',
  component: GridResponsiveValues,
};

const Template = (args) => <GridResponsiveValues {...args} />;

export const Default = Template.bind({});

Default.args = {
  theme: 'dark',
};