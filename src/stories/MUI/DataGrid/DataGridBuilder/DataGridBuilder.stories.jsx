import React from 'react';

import { DataGridBuilder } from './DataGridBuilder';

export default {
  title: 'MUI/DataGrid/DataGridBuilder',
  component: DataGridBuilder,
};

const Template = (args) => <DataGridBuilder {...args} />

export const Default = Template.bind({});

Default.args = {
  theme: 'dark',
};