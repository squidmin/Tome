import React from 'react';

import { TableDense } from './TableDense';


export default {
  title: 'MUI/Table/TableDense',
  component: TableDense,
};

const Template = (args) => <TableDense {...args} />


export const Default = Template.bind({});

function createRows(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createRows('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createRows('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createRows('Eclair', 262, 16.0, 24, 6.0),
  createRows('Cupcake', 305, 3.7, 67, 4.3),
  createRows('Gingerbread', 356, 16.0, 49, 3.9),
];

Default.args = {
  rows,
};