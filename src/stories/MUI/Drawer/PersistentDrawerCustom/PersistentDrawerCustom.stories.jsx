import React from 'react';

import { PersistentDrawerCustom } from './PersistentDrawerCustom';

export default {
  title: 'MUI/Drawer/PersistentDrawerCustom',
  component: PersistentDrawerCustom,
};

const Template = (args) => <PersistentDrawerCustom {...args} />;

export const Default = Template.bind({});

Default.args = {
  theme: 'dark',
};