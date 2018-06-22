import React from 'react';
import { Button } from 'antd';

const Counter = ({ count, onIncrement, onDecrement }) => {
    return (
        <div className="counter">
            <Button
                icon="caret-up"
                onClick={onIncrement}
            ></Button>
            <div>{count}</div>
            <Button
                icon="caret-down"
                onClick={onDecrement}
            ></Button>
        </div>
    )
}

export default Counter;