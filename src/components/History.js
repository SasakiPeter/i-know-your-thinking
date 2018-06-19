import React from 'react';
import { Table } from 'antd';

const History = ({ number }) => {

  return (
    <aside>
      <h1>History</h1>
      <div>{number[0]}</div>
      <div>{number[1]}</div>
      <div>{number[2]}</div>
      <div>{number[3]}</div>
      <div>{number[4]}</div>
    </aside>
  )
};

export default History;