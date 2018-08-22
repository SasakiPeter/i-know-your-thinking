import React from 'react';
import CPost from '../containers/CPost';
import Navbar from './Navbar';

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = arr.length - 1; i >= 0; i--) {
  let rand = Math.floor(Math.random() * (i + 1));
  [arr[i], arr[rand]] = [arr[rand], arr[i]]
};
let bool = true;
while (bool) {
  let rand = arr[Math.floor(Math.random() * arr.length)];
  let temp = arr.splice(rand, 1);
  if (arr.length === 3) {
    bool = false
  }
};
console.log(arr)

const App = () => {
  return (
    <div className="APP">
      <Navbar />
      <CPost answer={arr} />
    </div>
  )
};

export default App;