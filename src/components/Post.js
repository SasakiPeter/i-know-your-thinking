import React from 'react';
import { Button, message } from 'antd';
import Counter from './Counter';

class Post extends React.Component {
  state = {
    counts: Array(3).fill(0),
    history: [],
    stepNumber: 0,
    level: 3
  };

  onIncrement = (i) => {
    if (this.state.counts[i] === 9) {
      return
    } else {
      const counts = this.state.counts.slice()
      const arr = counts.splice(i, 1, counts[i] + 1)
      this.setState({
        counts: counts
      });
    }
  };

  onDecrement = (i) => {
    if (this.state.counts[i] === 0) {
      return
    } else {
      const counts = this.state.counts.slice()
      const arr = counts.splice(i, 1, counts[i] - 1)
      this.setState({
        counts: counts
      });
    }
  };

  handleSubmit = () => {
    // const { counts} = this.state;

    // const history = this.state.history.slice(0, this.state.stepNumber + 1)
    // const current = history[history.length - 1];
    // const number = current.number.slice();
    // console.log(history)
    // console.log(current);
    // console.log(number);

    const { history, counts, stepNumber } = this.state
    const [a, b, c] = counts;
    const same = []
    for (let i = 0; i < history.length; i++) {
      same.push(history[i].counts === counts)
    }
    const again = same.some(function (bool) {
      return bool === true;
    });
    if (a === b || a === c || b === c) {
      message.error("すべて異なる数字にしてください")
    } else if (again) {
      message.error("同じ回答はできません")
    } else {
      const newHistory = history.concat([
        {
          counts: counts,
          id: stepNumber
        }
      ]);
      this.props.onPostGuess(newHistory, newHistory.length);
      this.setState({
        history: newHistory,
        stepNumber: newHistory.length,
      });
      console.log(this.state);
    }
  };

  renderCounter = (i) => {
    let style = {
      width: 'calc(100 % /i);'
    };
    return (
      <Counter
        key={i}
        count={this.state.counts[i]}
        onIncrement={() => this.onIncrement(i)}
        onDecrement={() => this.onDecrement(i)}
        style={style}
      />
    );
  };

  render() {
    const { stepNumber, level } = this.state;
    const counters = [];
    for (let i = 0; i < level; i++) {
      counters.push(
        this.renderCounter(i)
      )
    };
    return (
      <section>
        <h1>rule</h1>
        <p>あなたは{stepNumber}回挑戦しました。</p>
        <div>
          {counters}
        </div>
        <Button
          type="primary"
          onClick={this.handleSubmit}
        >POST</Button>
      </section >
    )
  };
};

export default Post;