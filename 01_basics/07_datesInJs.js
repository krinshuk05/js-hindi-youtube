let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate));

let myCreatedDate=new Date(2026,7,29)
console.log(myCreatedDate.toDateString())

let myCreatedDate2=new Date(2026,7,29,15,30,)
console.log(myCreatedDate2.toLocaleString())

let myCreatedDate3=new Date("2026-08-28")
console.log(myCreatedDate3.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate3.getTime())

console.log(Math.floor(myTimeStamp/1000))



let newDate=new Date()
console.log(newDate)
console.log(newDate.getDate())

newDate.toLocaleString('default',{
    weekday: "long",
    
})