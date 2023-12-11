import { prettyPrintCupcake } from './cupcake-printer.js'
import fruits from './cupcake-printer.js'

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

