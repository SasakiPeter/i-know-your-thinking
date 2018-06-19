import React from 'react';
import { Input, Button, message } from 'antd';
import Counter from './Counter';
const { TextArea } = Input;

class Post extends React.Component {
  state = {
    // input: 0,
    history: [{
      number: Array(3).fill(null)
    }],
    stepNumber: 0,
    num1: 0,
    num2: 0,
    num3: 0
  };



  // handleChange = event => {
  //   this.setState(
  //     { [event.target.name]: event.target.value }
  //   );
  //   console.log(this.state);
  // };

  // handleSubmit = () => {
  //   // const { number } = this.state;
  //   const { input } = this.state;

  //   const history = this.state.history.slice(0, this.state.stepNumber + 1)
  //   const current = history[history.length - 1];
  //   const number = current.number.slice();
  //   console.log(history)
  //   console.log(current);
  //   console.log(number);


  //   if (input == 0) {
  //     message.error('3桁の数字を入れてください')
  //   } else {
  //     this.setState({
  //       history: history.concat([{
  //         number: number,
  //       }]),
  //       stepNumber: history.length,
  //     })
  //     this.props.onPostGuess(this.state.history, this.state.stepNumber)
  //   };


  // };


  render() {
    const { num1, num2, num3 } = this.state;
    return (
      <section>
        <h1>rule</h1>
        {/* <TextArea
          name="input"
          value={input}
          placeholder="3桁の数字"
          onChange={this.handleChange}
        /> */}

        {/* <div>{num1}</div> */}
        <Counter />
        <Counter />
        <Counter />
        <Button
          type="primary"
          onClick={this.handleSubmit}
        >POST</Button>
      </section >
    )
  };
};

export default Post;