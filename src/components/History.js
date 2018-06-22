import React from 'react';
import { message } from 'antd';



class History extends React.Component {
  state = {
    eat: 0,
    bite: 0
  }

  render() {
    const counts = this.props.current.counts
    const response = calculate(counts, this.props.answer)
    console.log(response)

    const history = this.props.history.slice()
    history[history.length - 1].eat = response.eat;
    history[history.length - 1].bite = response.bite;
    console.log(history);

    const view = [];
    if (this.props.current.id < 0) {
      return (
        <h1>No History</h1>
      )
    } else {
      history.map((c) => {
        view.push(
          <li>{c.counts}:{c.eat}{"-"}{c.bite}</li>
        )
      })
      return (
        <div>
          <h1>History</h1>
          <ol>{view}</ol>
        </div>
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