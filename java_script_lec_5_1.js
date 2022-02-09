console.log("my java script code from an external file");

// js is a loosley typed lanaguage

var x = 5;

var y = 9;

console.log(x * y);

// now use a function and function does not have a return type

function sum(a, b) {
  return a + b;
}

// console.log(x, y); this diplays the numbers 5 and 9 in parallel

console.log(sum(x, y));

// we can also assign functions to variables ...

// by doing this the whole function is printed as it is ...

var mysum = sum;

console.log(mysum);

// what if i try this ...

// by doing this it gives me the actual sum of the two numbers

var summation = sum(x, y);

console.log(summation);
