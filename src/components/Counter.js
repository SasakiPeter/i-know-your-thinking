import React from 'react';
import { Button } from 'antd';

class Counter extends React.Component {
    state = {
        count: 0
    }

    onIncrement = () => {
        if (this.state.count === 9) {
            return
        } else {
            this.setState({
                count: this.state.count + 1
            })
        }
    }

    onDecrement = () => {
        if (this.state.count === 0) {
            return
        } else {
            this.setState({
                count: this.state.count - 1
            })
        }
    }

    render() {
        const { count } = this.state
        return (
            <div className="counter">
                <Button
                    onClick={this.onIncrement}
                >INCREMENT</Button>
                <div>{count}</div>
                <Button
                    onClick={this.onDecrement}
                >DECREMENT</Button>
            </div>
        )
    };
}

export default Counter;