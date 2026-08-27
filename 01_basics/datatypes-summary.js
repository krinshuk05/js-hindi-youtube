const id=Symbol("232")
const anotherId=Symbol("232")
console.log(id==anotherId);

const bigNum=32874953253323552355323454
console.log(bigNum)

const heros=["shaktiman", "nagraj", "doga"];
let myObj={
    name: "krinshuk",
    age:19
}
const myFunction =function(){
    console.log("hello world");
}
console.log(typeof heros)




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack(primitve) yha se variable ki copy mitli haii, 
// heap(non-primitive) yha variable ka ref milta haii yha original value mein changes hogi

let myYoutubename="rudra777"
let anotherName=myYoutubename
anotherName="Pro_gamerz"
console.log(anotherName)
console.log(myYoutubename)


let user1={
    email:"user@google.com",
    upi:"user@ybl"
}
let user2=user1
user2.email= "freefire@google.com"

console.log(user1.email)
console.log(user2.email)