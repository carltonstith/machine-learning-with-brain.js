//https://www.youtube.com/watch?v=RVMHhtTqUxc&t=355s

//https://github.com/bradtraversy/brainjs_examples

//https://coderoncode.com/machine/learning/2016/06/06/machine-learning-a-simple-neural-network.html

//https://itnext.io/you-can-build-a-neural-network-in-javascript-even-if-you-dont-really-understand-neural-networks-e63e12713a3

const brain = require('brain.js');

const network = new brain.NeuralNetwork();

// Using Table 1: Problem Examples from the above link
// network.train([
//   { input: [0, 0, 0], output: [0] },
//   { input: [0, 0, 1], output: [0] },
//   { input: [0, 1, 1], output: [0] },
//   { input: [1, 0, 1], output: [1] },
//   { input: [1, 1, 1], output: [1] }
// ]);

// An example using 4 football teams as the input.
// If the output is 0, that means team 1 won. If the output is 1,
// that means team 2 won
network.train([
  { input: [1, 2], output: [1] }, // team 2 wins
  { input: [1, 3], output: [1] }, // team 3 wins
  { input: [2, 3], output: [0] }, // team 2 wins
  { input: [2, 4], output: [1] }, // team 4 wins
  { input: [1, 2], output: [0] }, // team 1 wins
  { input: [1, 3], output: [0] }, // team 3 wins
  { input: [3, 4], output: [0] }  // team 3 wins
]);

const output = network.run([1, 4]);

console.log(`Prob: ${output}`);
