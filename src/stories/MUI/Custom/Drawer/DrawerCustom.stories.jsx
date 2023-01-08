import React from 'react';

import { DrawerCustom } from './DrawerCustom';

export default {
  title: 'MUI/Custom/DrawerCustom',
  component: DrawerCustom,
};

const Template = (args) => <DrawerCustom {...args} />;

export const Default = Template.bind({});

Default.args = {
  theme: 'dark',
  config: {
    1: [
        {
            "Test 1": "/Test_1"
        },
        {
            "Test 2": "/Test_2"
        },
        {
            "Test 3": "/Test_3"
        }
      ]
  },
};