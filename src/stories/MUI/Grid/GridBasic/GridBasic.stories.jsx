import React from 'react';

import { GridBasic } from './GridBasic';

export default {
  title: 'MUI/Grid/GridBasic',
  component: GridBasic,
};

const Template = (args) => <GridBasic {...args} />;

export const Default = Template.bind({});

Default.args = {
  theme: 'dark',
};