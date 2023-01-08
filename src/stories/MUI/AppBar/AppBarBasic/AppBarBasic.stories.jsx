import React from 'react';

import { AppBarBasic } from './AppBarBasic';

export default {
  title: 'MUI/AppBar/AppBarBasic',
  component: AppBarBasic,
};

const Template = (args) => <AppBarBasic {...args} />;

export const Default = Template.bind({});

Default.args = {
  typographyText: 'News',
  buttonText: 'Login',
};