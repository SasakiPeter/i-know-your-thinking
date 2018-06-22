import React from 'react';
import CPost from '../containers/CPost';
import CHistory from '../containers/CHistory';

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let bool = true;
while (bool) {
  const rand = arr[parseInt(Math.random() * arr.length)];
  const temp = arr.splice(rand, 1);
  console.log(arr)
  if (arr.length === 3) {
    bool = false
  }
};

const App = () => {
  return (
    <div>
      {/* <h1>{arr}</h1> */}
      <nav>
        <h1>navigation bar</h1>
      </nav>
      <div className="APP">
        <CPost />
        <CHistory answer={arr} />
      </div>
    </div>
  )
};

export default App;