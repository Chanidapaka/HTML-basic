                                  //Variable(ตัวแปร) => Dynamic Typing //
let name = "Chanidapa"
var age = 20
const address = "99 Bangkok"

name = "Aom" //เปลี่ยนได้
age = 21     //เปลี่ยนได้
//address = "88 Bangkok" //เปลี่ยนไม่ได้ error
console.log(name) //output Aom
console.log(age)  //output 21 
console.log(address) //output 99 Bangkok

                                         //Data Type //
const pen = false  
const pencil = true 
console.log(typeof(pen)) //boolean false
console.log(typeof(pencil)) //boolean true

const num1 = 20   //เลขโดด
const num2 = 45.5 //ทศนิยม
const num3 = 45/5 // +, -, *, /, %
console.log(typeof(num1)) //number int
console.log(typeof(num2)) //number float
console.log(num3) //9

const str1 = "Aom"
const str2 = 'Bas'
const str3 = `Dow`
console.log(typeof(str1))  //string Aom
console.log(typeof(str2))  //string Bas
console.log(typeof(str3))  //string Dow

const obj = {
          fname: "Chanidapa",
          lname: "Panta",
          age:20
} 
console.log(typeof(obj)) //object
console.log(obj)       //output { fname: 'Chanidapa', lname: 'Panta', age: 20 }
console.log(obj.fname) //output Chanidapa
console.log(obj.lname)  //output Panta  
console.log(obj.age)   //output 20

const arr = ["pink", "red", "black"] 
console.log(typeof(arr)) //array
console.log(arr) //output [ 'pink', 'red', 'black' ]


