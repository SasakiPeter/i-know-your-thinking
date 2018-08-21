import React from 'react';
import { Table } from 'antd';

class History extends React.Component {
  render() {
    const data = [];
    const history = this.props.history;
    if (this.props.current.id < 0) {
      return (
        <aside>
          <h2>ここにヒントがでるよ</h2>
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
        <aside>
          <h2>ひんと</h2>
          <Table
            dataSource={data}
            columns={columns}
            pagination={false}
          />
        </aside>
      )
    };
  }
};

export default History;