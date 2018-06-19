import React from 'react';
import { Table } from 'antd';

const columns = [{
  title: "your_guess",
  dataIndex: "your_guess",
  key: "your_guess"
}, {
  title: "response",
  dataIndex: "response",
  key: "response"
}];


const History = ({ history, stepNumber }) => {
  // const num = stepNumber
  // const array = history
  // const array1 = history[0].slice()
  // const history1 = history.slice(0, stepNumber + 1)
  // const current1 = history1[history1.length - 1];
  // const number1 = current1.number.slice();
  // const test = history1[0];

  // console.log(history1);
  // console.log(history1[0]);

  //こういう時、map必須っぽい
  let data = []
  history.map((b) =>
    data.push(
      // number: b.number.join("")
      <li>{b.number}</li>
    )
  )




  return (
    <aside>
      <h1>History</h1>
      <ol>{data}</ol>
      {/* <div>{array1}</div> */}
      {/* <div>{array[num - 1]}</div> */}
      {/* <div>{number1}</div> */}
      {/* <Table
        dataSource={data}
        columns={columns}
        title="History"
        pagination={false}
      /> */}
    </aside>
  )
};

export default History;