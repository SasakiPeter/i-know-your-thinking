import React from 'react';
import { Table } from 'antd';

const columns = [{
  title: '',
  dataIndex: 'counts',
  key: 'counts'
}, {
  title: 'eat',
  dataIndex: 'eat',
  key: 'eat'
}, {
  title: 'bite',
  dataIndex: 'bite',
  key: 'bite'
}];

const History = ({ history, current }) => {
  const data = [];
  console.log(history);
  console.log(columns);
  console.log(current.id);


  if (current.id < 0) {
    return (
      <aside>
        <p>まだ履歴はありません。</p>
        <p>適当に数字を入力してプレイしてみましょう。</p>
      </aside>
    )
  } else {
    history.map((e) => {
      data.push({
        key: e.id,
        counts: e.counts,
        eat: e.eat,
        bite: e.bite
      })
    })
    return (
      <aside>
        <Table
          dataSource={data}
          columns={columns}
          pagination={false}
        />
      </aside>
    )
  };
}

export default History;