import React from 'react';
import { Button, message, Icon, notification } from 'antd';
import Counter from './Counter';
import { TwitterShareButton, TwitterIcon } from 'react-share';

class Post extends React.Component {
  state = {
    counts: Array(3).fill(0),
    history: [],
    stepNumber: 0,
    level: 3
  };

  onIncrement = (i) => {
    const counts = this.state.counts.slice()
    if (this.state.counts[i] === 9) {
      const tmp = counts.splice(i, 1, 0)
    } else {
      const tmp = counts.splice(i, 1, counts[i] + 1)
    };
    this.setState({
      counts: counts
    });
  };

  onDecrement = (i) => {
    const counts = this.state.counts.slice()
    if (this.state.counts[i] === 0) {
      const tmp = counts.splice(i, 1, 9)
    } else {
      const tmp = counts.splice(i, 1, counts[i] - 1)
    };
    this.setState({
      counts: counts
    });
  };

  handleSubmit = () => {
    if (this.props.completed === true) {
      return
    };

    const { history, counts, stepNumber } = this.state
    const [a, b, c] = counts;
    const same = []
    for (let i = 0; i < history.length; i++) {
      same.push(history[i].counts === counts)
    }

    // ここ、if in でもいいよね
    const again = same.some(function (bool) {
      return bool === true;
    });

    if (a === b || a === c || b === c) {
      message.error("すべて異なる数字にしてね")
    } else if (again) {
      message.error("同じ回答は投稿できないよ")
    } else {
      const answer = this.props.answer;
      const response = calculate(counts, answer);

      if (response.eat === 3) {
        notification['success']({
          message: '正解！',
          description: 'おめでとうございます! 答えは ' + answer.join('') + ' でした！！',
        });
        // これ、stateで管理したほうがいいんじゃ？
        this.props.onCompleted();
      } else {
        notification['info']({
          message: 'ヒント',
          description: 'eat : ' + response.eat + '  bite : ' + response.bite,
        });
      };


      const newHistory = history.concat([
        {
          counts: counts,
          id: stepNumber,
          eat: response.eat,
          bite: response.bite
        },
      ]);
      this.props.onPostGuess(newHistory, newHistory.length);
      this.setState({
        history: newHistory,
        stepNumber: newHistory.length,
      })
    };
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
      // ここstyled component使いたい
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
    const completed = this.props.completed;

    for (let i = 0; i < level; i++) {
      counters.push(
        this.renderCounter(i)
      )
    };
    return (
      <section className="Post">
        <h1>ぬめろんアプリ</h1>
        <div className="info">
          <TwitterShareButton
            url={window.location.href}
            title={true === completed ?
              "ぬめろんやろう! 私は" + stepNumber + "回挑戦してクリアしたよ♪" :
              "ぬめろんやろう!"
            }
            hashtags={["ぬめろんアプリ"]}
          >
            <TwitterIcon
              size={32}
              round={true}
            />
          </TwitterShareButton>
          <p>あなたは<span>{stepNumber}</span>回挑戦しました！</p>
        </div>
        <div className="controller">
          <div>
            {counters}
          </div>
          <Button
            type="primary"
            onClick={this.handleSubmit}
          ><Icon type="rocket" style={{ fontSize: 25 }} /></Button>
        </div>
      </section>
    )
  };
};

export default Post;

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
    };
  };
  return { eat: eat, bite: bite }
};