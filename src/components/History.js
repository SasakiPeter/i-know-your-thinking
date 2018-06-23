import React from 'react';
import { message, Table } from 'antd';

class History extends React.Component {
  state = {
    eat: 0,
    bite: 0
  }

  render() {
    const counts = this.props.current.counts
    const answer = this.props.answer
    const response = calculate(counts, answer)
    if (response.eat === 3) {
      message.success("おめでとうございます! 答えは " + answer.join("") + " でした！！")
    };

    const data = [];
    const history = this.props.history.slice();
    history[history.length - 1].eat = response.eat;
    history[history.length - 1].bite = response.bite;
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
      })

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


const calculate = (counts, answer) => {
  let eat = 0;
  let bite = 0;
  for (let i = 0; i < 3; i++) {
    const bool = answer.some(value => value === counts[i]);
    if (bool) {
      if (counts[i] === answer[i]) {
        eat++
      } else {
        bite++
      };
    } else {
    };
  };
  return { eat: eat, bite: bite }
};