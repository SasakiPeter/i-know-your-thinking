import React from 'react';
import CPost from '../containers/CPost';
import CHistory from '../containers/CHistory';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  num1 = array[parseInt(Math.random() * array.length)],
  array1 = array.concat([0]);
array1.some(function (v, i) {
  if (v === num1) {
    array1.splice(i, 1)
  };
});
const num2 = array1[parseInt(Math.random() * array1.length)];
array1.some(function (v, i) {
  if (v === num2) {
    array1.splice(i, 1)
  };
});
const num3 = array1[parseInt(Math.random() * array1.length)];

const App = () => {
  return (
    <div>
      <h1>{num1}{num2}{num3}</h1>
      <nav>
        <h1>navigation bar</h1>
      </nav>
      <div class="APP">
        <CPost />
        <CHistory />
      </div>
    </div>
  )
};

export default App;