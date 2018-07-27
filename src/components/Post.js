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
      const counts = this.state.counts.slice()
      const tmp = counts.splice(i, 1, 0)
      this.setState({
        counts: counts
      });
    } else {
      const counts = this.state.counts.slice()
      const tmp = counts.splice(i, 1, counts[i] + 1)
      this.setState({
        counts: counts
      });
    }
  };

  onDecrement = (i) => {
    if (this.state.counts[i] === 0) {
      const counts = this.state.counts.slice()
      const tmp = counts.splice(i, 1, 9)
      this.setState({
        counts: counts
      });
    } else {
      const counts = this.state.counts.slice()
      const tmp = counts.splice(i, 1, counts[i] - 1)
      this.setState({
        counts: counts
      });
    }
  };

  handleSubmit = () => {
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
      message.error("すべて異なる数字にしてね")
    } else if (again) {
      message.error("同じ回答は投稿できないよ")
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
    }
  };

  renderCounter = (i) => {
    // let style = {
    //   width: "calc(100 % /3)"
    // };
    return (
      <Counter
        key={i}
        count={this.state.counts[i]}
        onIncrement={() => this.onIncrement(i)}
        onDecrement={() => this.onDecrement(i)}
      // style={{
      //   width: calc(100 % /3);
      // }}
      // style={style}
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
      <section className="Post">
        <h1>ぬめろん</h1>
        <a href="https://github.com/SasakiPeter/i-know-your-thinking">Show GitHub Repository</a>
        <section>
          <h2>せつめい</h2>
          <p>私の考えている3桁の数字を当ててみよう！</p>
          <ul>
            <li>ヒント1："<span>eat</span>"の数だけ数字が<span>一致</span>しているよ</li>
            <li>ヒント2："<span>bite</span>"の数だけ数字が<span>含まれ</span>ているよ、でも一致はしてないよ</li>
          </ul>
        </section>
        <p>あなたは<span>{stepNumber}</span>回挑戦しました。</p>
        <div>
          {counters}
        </div>
        <Button
          type="primary"
          onClick={this.handleSubmit}
        >そーしん</Button>
      </section >
    )
  };
};

export default Post;