import React from 'react';
import PropTypes from 'prop-types';

import { Table } from 'antd';
import 'antd/dist/antd.css';


export const TableBasic = ({ ...props }) => {
  return (
    <Table dataSource={props.dataSource} columns={props.columns} />
  );
};


TableBasic.propTypes = {
  dataSource: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};

TableBasic.defaultProps = {
  dataSource: [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    }
  ],
  columns: [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ]
};