import React from 'react';
import { Input, Button, message } from 'antd';
const { TextArea } = Input;

class Post extends React.Component {
  state = {
    number: new Number()
  }

  handleChange = event => {
    this.setState(
      { [event.target.name]: event.target.value }
    );
    console.log(this.state);
  };

  handleSubmit = () => {
    const { number } = this.state;
    if (number == 0) {
      message.error('3桁の数字を入れてください')
    } else {
      this.props.onPostNumber(number)
    };
  };


  render() {
    const { number } = this.state;
    return (
      <section>
        <h1>rule</h1>
        <TextArea
          name="number"
          value={number}
          placeholder="3桁の数字"
          onChange={this.handleChange}
        />
        <Button
          type="primary"
          onClick={this.handleSubmit}
        >POST</Button>
      </section>
    )
  };
};

export default Post;