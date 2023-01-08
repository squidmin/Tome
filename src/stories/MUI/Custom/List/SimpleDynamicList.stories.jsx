import React from 'react';

import { SimpleDynamicList } from './SimpleDynamicList';

export default {
  title: 'MUI/Custom/SimpleDynamicList',
  component: SimpleDynamicList,
};

const Template = (args) => <SimpleDynamicList {...args} />;

export const Default = Template.bind({});

Default.args = {
  
};