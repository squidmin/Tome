import React from 'react';

import { DataGridFlexLayout } from './DataGridFlexLayout';

import { columns, rows, } from '../shared/tokens/DataGrid_generic';

export default {
  title: 'MUI/DataGrid/DataGridFlexLayout',
  component: DataGridFlexLayout,
};

const Template = (args) => <DataGridFlexLayout {...args} />

export const Default = Template.bind({});

Default.args = {
  columns,
  rows,
  pageSize: 5,
  rowsPerPageOptions: [5],
};