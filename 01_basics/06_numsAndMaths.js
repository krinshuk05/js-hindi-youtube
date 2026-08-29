const score=400
const newScore=new Number(100)
console.log(newScore);
console.log(typeof(score));
console.log(typeof(newScore));


console.log(newScore.toString().length)
console.log(newScore.toFixed(2));

const otherNumber=1123.89
console.log(otherNumber.toPrecision(3))

const hundreds = 100000
console.log(hundreds.toLocaleString()); //by default wih US standards
console.log(hundreds.toLocaleString('en-IN')); //in INDIAN value




// ++++++++++++++++++++++ Maths ++++++++++++++++++++++

console.log(Math) // is object and contains some properties
console.log(Math.abs(-4))
console.log(Math.round(4.5))
console.log(Math.ceil(4.5)) 
console.log(Math.floor(4.5)) 
console.log(Math.min(4,5,1,23)) 
console.log(Math.max(4,5,1,23)) 

console.log(Math.random()*100)

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min +1))+min);


