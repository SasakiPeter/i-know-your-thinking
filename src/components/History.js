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

const History = ({ history, current, completed }) => {
  const data = [];
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
    });
    if (completed === true) {
      return (
        <aside>
          <Table
            dataSource={data}
            columns={columns}
            pagination={false}
          />
          <p>お見事！正解です！！</p>
          <p>これ以上の投稿はできません。続けて遊ぶ方は
          <a href={window.location.href}>ここ</a>
            をクリックしてください。</p>
        </aside>
      )
    } else {
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
  };
}

export default History;