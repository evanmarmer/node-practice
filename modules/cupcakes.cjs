// let importObject = require('./cupcake-printer.cjs')
// let prettyPrintCupcake = importObject.prettyPrintCupcake

let {prettyPrintCupcake} = require('./cupcake-printer.cjs')

  console.log(fruits)

const cupcakes = [
    {
      flavor: 'vanilla',
      price: 2.0,
    },
    {
      flavor: 'chocolate',
      price: 2.5,
    },
    {
      flavor: 'red velvet',
      price: 3.0,
    },
  ];

  for (const cupcake of cupcakes) {
    console.log(prettyPrintCupcake(cupcake));
  }
