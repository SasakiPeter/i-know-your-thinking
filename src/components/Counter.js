import React from 'react';
import { Button } from 'antd';

const Counter = ({ count, onIncrement, onDecrement }) => {
    return (
        <div className="counter">
            <Button
                onClick={onIncrement}
            >+</Button>
            <div>{count}</div>
            <Button
                onClick={onDecrement}
            >-</Button>
        </div>
    )
}

export default Counter;