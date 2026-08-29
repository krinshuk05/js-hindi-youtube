const name="Krinshuk"
const repoCount =50
console.log(name+repoCount)

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`)

const name2= new String('krinshuk2')
console.log(name2.__proto__)
console.log(name2.length);
console.log(name2.toUpperCase());
console.log(name2.charAt('2'))
console.log(name2.indexOf("k"))

const newString= name2.substring(0,4)
console.log(newString)

const anotherString=name2.slice(-8,4)
console.log(anotherString)

const newString1="   Krinshuk   "
console.log(newString1);
console.log(newString1.trim());

const url="https://krinshuk.com//krinshuk%20singh"
console.log(url.replace('%20','❤️'))

console.log(url.includes('krinhuk'))

const name3="Krin-sh-u-k"
console.log(name3.split('-',1))

