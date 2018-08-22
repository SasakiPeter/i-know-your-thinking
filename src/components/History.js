import React from 'react';
import { Table } from 'antd';

class History extends React.Component {
  render() {
    const data = [];
    const history = this.props.history;
    if (this.props.current.id < 0) {
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

      return (
        <div>
          <aside>
            <Table
              dataSource={data}
              columns={columns}
              pagination={false}
            />
          </aside>
        </div>

      )
    };
  }
};

export default History;