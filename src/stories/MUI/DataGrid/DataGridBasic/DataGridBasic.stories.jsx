import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import { DataGridBasic } from './DataGridBasic';

import { columns, rows, } from '../shared/tokens/DataGrid_generic';


export default {
  title: 'MUI/DataGrid/DataGridBasic',
  component: DataGridBasic,
};

const Template = (args) => <DataGridBasic {...args} />


export const Default = Template.bind({});

Default.args = {
  columns,
  rows,
  pageSize: 5,
  rowsPerPageOptions: [5],
};