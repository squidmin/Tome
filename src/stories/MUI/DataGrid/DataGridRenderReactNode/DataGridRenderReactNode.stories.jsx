import React from 'react';

import { DataGridRenderReactNode, RenderDate,} from './DataGridRenderReactNode';

// import { columns, rows, } from '../shared/tokens/DataGridRenderReactNode_generic';

export default {
  title: 'MUI/DataGrid/DataGridRenderReactNode',
  component: DataGridRenderReactNode,
};

const Template = (args) => <DataGridRenderReactNode {...args} />

export const Default = Template.bind({});

const columns = [
  {
    field: 'date',
    headerName: 'Year',
    width: 150,
    renderCell: RenderDate,
  },
];

const rows = [
  {
    id: 1,
    date: new Date(1979, 0, 1),
  },
  {
    id: 2,
    date: new Date(1984, 1, 1),
  },
  {
    id: 3,
    date: new Date(1992, 2, 1),
  },
];

Default.args = {
  columns,
  rows,
};