import React from 'react';

import { RJSFArray } from './RJSFArray';

import { category, fd, } from './RJSFArray.tokens';

export default {
  title: 'MUI/RJSF/RJSFArray',
  component: RJSFArray,
};

const Template = (args) => <RJSFArray {...args} />;

export const Default = Template.bind({});

Default.args = {
  schema: category,
  formData: fd,
};