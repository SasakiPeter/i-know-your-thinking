import React from 'react';
import CPost from '../containers/CPost';
import Navbar from './Navbar';

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = arr.length - 1; i >= 0; i--) {
  let rand = Math.floor(Math.random() * (i + 1));
  [arr[i], arr[rand]] = [arr[rand], arr[i]]
};

const tmp = arr.splice(3);

if (process.env.NODE_ENV === 'development') {
  console.log(arr)
};

const App = () => {
  return (
    <div className="APP">
      <Navbar />
      <CPost answer={arr} />
    </div>
  )
};

export default App;