//LARGEST OF EACH ARRAY
// Inspired by https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript
// The above link helped me with getting the maximum of each array, but the map function was my own creation

const largestOfEach = arr => {
  return arr.map((e, i) => Math.max(...arr[i]));
};

console.log(
  largestOfEach([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);

module.exports = {
  largestOfEach
};
