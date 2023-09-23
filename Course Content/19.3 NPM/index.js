// var generateName = require('sillyname');
// var sillyName = generateName();


// // use backticks instead of quotes 
// console.log(`my name is ${sillyName}.`);


// we can use the import from keywords instead of require by creating ecma script modules.

// import xxx from "package"
import generateName from "sillyname";
var sillyName = generateName();


// use backticks instead of quotes 
console.log(`my name is ${sillyName}.`);


// do the same for super hero names
import superheroes from "superheroes";
var superHero = superheroes.random();
console.log("My superhero name is " + superHero );