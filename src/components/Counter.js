import React from 'react';
import { Button } from 'antd';

class Counter extends React.Component {
    // state = {
    //     count: 0,
    //     counts: Array(3).fill(null)
    // }

    // onIncrement = (i) => {
    //     if (this.state.count === 9) {
    //         return
    //     } else {
    //         this.setState({
    //             count: this.state.count + 1,
    //             counts: this.state.counts[i]
    //         })
    //         const test = this.state.counts.slice()
    //         const test1 = test.slice(test[i], 1, this.state.count)
    //         console.log(test1)
    //     }
    // }

    // onDecrement = (i) => {
    //     if (this.state.count === 0) {
    //         return
    //     } else {
    //         this.setState({
    //             count: this.state.count - 1
    //         })
    //     }
    // }

    render() {
        // const { count } = this.state
        return (
            <div className="counter">
                <Button
                    onClick={this.props.onIncrement}
                >+</Button>
                <div>{this.props.count}</div>
                <Button
                    onClick={this.props.onDecrement}
                >-</Button>
            </div>
        )
    };
};

export default Counter;