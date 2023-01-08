import React from 'react';

import { GridChangeDefaultColumnAmount } from './GridChangeDefaultColumnAmount';

export default {
  title: 'MUI/Grid/GridChangeDefaultColumnAmount',
  component: GridChangeDefaultColumnAmount,
};

const Template = (args) => <GridChangeDefaultColumnAmount {...args} />;

export const Default = Template.bind({});

Default.args = {
  theme: 'dark',
};