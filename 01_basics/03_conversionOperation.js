let score=1
// const {score2} = req.body  //taking value from front end 
//so we dont know its data type. How we will check??
console.log(typeof score)
console.log(typeof (score)) //getting value as a method
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log( valueInNumber)


//"33"=> 33
// "33abc"=> NaN Not a Number

let isLoggedIn="hii"
let booleanIsLoggedin=Boolean(isLoggedIn);
console.log(booleanIsLoggedin)

// 1=> true; 0=> false
// ""=> false
// "hii"=> true

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
