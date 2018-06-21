import React from 'react';
import { Input, Button, message } from 'antd';
import Counter from './Counter';
// const { TextArea } = Input;

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
      // console.log(this.state);
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
      // console.log(this.state);
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
    const history = this.state.history.concat([
      {
        counts: this.state.counts,
        id: this.state.stepNumber
      }
    ]);
    this.props.onPostGuess(history, history.length);
    this.setState({
      history: history,
      stepNumber: history.length,
    });
    console.log(this.state);
  };

  // renderCounter = () => {
  //   let counters = []
  //   for (let i = 0; i < this.state.level; i++) {
  //     counters.push(
  //       <Counter
  //         key={i}
  //         count={this.state.counts[i]}
  //         onIncrement={() => this.onIncrement(i)}
  //         onDecrement={() => this.onDecrement(i)}
  //       />
  //     )
  //   }
  //   return (
  //     { counters }
  //   )
  // }

  renderCounter = (i) => {
    return (
      <Counter
        key={i}
        count={this.state.counts[i]}
        onIncrement={() => this.onIncrement(i)}
        onDecrement={() => this.onDecrement(i)}
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