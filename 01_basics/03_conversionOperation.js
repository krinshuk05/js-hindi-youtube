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


// score ki data type number haii too frr v wo no mein print kyu nhi ho rha??
// Dekho, jab tumne let score = "33abc"; likha aur fir usko Number(score) mein pass kiya, toh JavaScript ka engine background mein yeh karta hai:

// Engine pehla character padhta hai: '3' (theek hai, number hai).

// Doosra padhta hai: '3' (theek hai).

// Teesra padhta hai: 'a'... Wait! Error!

// Jaise hi engine ko alphabet milta hai, usko samajh nahi aata ki iska math mein kya karein. Ab yahan do raaste the: ya toh engine error phek kar program crash kar de, ya fir koi fallback value de de. JavaScript forgiving language hai, isliye wo crash nahi hoti, balki ek special value return karti hai jise hum NaN (Not a Number) kehte hain.

// Toh fir iska typeof number kyun hai?

// NaN ka naam "Not a Number" zaroor hai, par computer science (IEEE 754 standard) ki bhasha mein iska actual matlab hota hai "Invalid Number" ya "Failed Number".

// Isko ek real-life example se samjho:
// Agar tumhari bike ka engine completely kharab ho jaye aur wo chalne ke qabil na rahe, toh kya wo achaanak se "Hawai Jahaz" ban jayegi? Nahi. Wo ek "Kharab Bike" kehlayegi, par uski category (type) abhi bhi "Vehicle/Bike" hi rahegi.

// Bilkul waise hi, kyunki tumne explicitly usko Number() method se convert karne ki koshish ki thi, JS ne usko number family ka label de diya, par kyunki uske andar alphabets the, value NaN (kharab number) set kar di.