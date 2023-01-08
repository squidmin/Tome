import React from 'react';

import { pages, settings, } from '../shared/tokens/AppBarWithResponsiveMenu_generic';

import { AppBarWithResponsiveMenu } from './AppBarWithResponsiveMenu';

export default {
  title: 'MUI/AppBar/AppBarWithResponsiveMenu',
  component: AppBarWithResponsiveMenu,
};

const Template = (args) => <AppBarWithResponsiveMenu {...args} />;

export const Default = Template.bind({});

Default.args = {
  pages,
  settings,
};