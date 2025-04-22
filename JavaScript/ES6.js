// Arrow function
fullname=(fname,lname)=> fname +  lname
console.log(fullname("Aom","Chanidapa"))

//object
// const customer = {
//           customerName : "Chanidapa Panta",
//           age: 20,
//           address:"bangkok"
// }
// console.log(customer.age)

//มีตัวแปรที่เก็บข้อมูล
const username = "Chanidapa"
const age = 20
const address = "Phare"

const customer = {
          customerName : username,
          age: age, //สามารถเขียนแค่ครั้งเดียวได้
          address:address //สามารถเขียนแค่ครั้งเดียวได้
}
console.log(customer)

//String 
//MultiLine String = ข้อความที่เว้นบรรทัด 
console.log(`ชื่อลูกค้า: เอสเธอร์
          ที่อยู่: เลขที่8 ซอยเพรชเกษม45/1`)

//Interpolation = แทรก
 const customerName1 = "Aom"
 console.log(`ชื่อลูกค้า: ${customerName1}
          ที่อยู่: เลขที่8 ซอยเพรชเกษม45/1`)

//Spread Operator = กระจายสมาชิกใน Array1 โดยใช้ ... เข้ามาใน Array2
const newArray = [100, 200, 300]
const data = [10, 20, ...newArray]
console.log(data) //output [ 10, 20, 100, 200, 300 ]

//push
const colos = ['green', 'pink', 'red']
const allColos = ['back', 'blue', ...colos]

const newColos = ['white', 'orange']
allColos.push(...newColos)
console.log(allColos)

//Rest Parameter = เอา Array เข้าไปทำงานใน function โดยใช้ ... ในรูปแบบ parameter
function summation(...number) { //มันจะเก็บค่าที่ส่งเข้ามาทุกตัวไว้ใน array ชื่อว่า number
          let total = 0
          for (let i = 0; i < number.length; i++) {
                    total += number[i]              
          }
          return total
}
console.log(summation(50, 10))

//