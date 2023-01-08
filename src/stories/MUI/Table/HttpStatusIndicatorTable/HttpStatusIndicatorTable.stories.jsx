import React from 'react';

import { HttpStatusIndicatorTable } from './HttpStatusIndicatorTable';


export default {
  title: 'MUI/Table/HttpStatusIndicatorTable',
  component: HttpStatusIndicatorTable,
};

const Template = (args) => <HttpStatusIndicatorTable {...args} />


export const Default = Template.bind({});

const columnNames = [ 'Name', 'URL', 'Status' ];

const createRows = (name, url, status) => { return { name, url, status }; };

const rows = [
  createRows('Amazon', 'http://www.amazon.com', 200),
  createRows('Docker', 'http://www.docker.com', 400),
  createRows('Google', 'http://www.google.com', 200),
  createRows('GitHub', 'http://www.github.com', 500),
];

Default.args = {
  columnNames,
  rows,
};