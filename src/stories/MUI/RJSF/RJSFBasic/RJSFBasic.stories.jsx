import React from 'react';

import { RJSFBasic } from './RJSFBasic';

import { category, fd, } from './RJSFBasic.tokens';

export default {
  title: 'MUI/RJSF/RJSFBasic',
  component: RJSFBasic,
};

const Template = (args) => <RJSFBasic {...args} />;

export const Default = Template.bind({});

Default.args = {
  schema: category,
  formData: fd,
};