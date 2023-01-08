import React from 'react';

import { DataGridFilteredBasic } from './DataGridFilteredBasic';

import { columns, rows, } from '../shared/tokens/DataGrid_generic';

export default {
  title: 'MUI/DataGrid/DataGridFilteredBasic',
  component: DataGridFilteredBasic,
};

const Template = (args) => <DataGridFilteredBasic {...args} />

export const Default = Template.bind({});

Default.args = {
  columns,
  rows,
};