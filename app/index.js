// import addStuff, {substract, multiply} from './calc'; // addStuff is default return which is anonymous function.

// console.log('5 + 7 =', addStuff(5,7));
// console.log("8 - 9 =", substract(8, 9));
// console.log("2 * 3 =", multiply(2,3));

import * as math from "./calc";

console.log("math: ", math);

console.log('5 + 7 =', math.default(5,7));
console.log("8 - 9 =", math.substract(8, 9));
console.log("2 * 3 =", math.multiply(2,3));