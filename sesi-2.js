// Object Literal

let employeeName = 'Udin Sedunia'
let employeeNumber = 123123
let employeeEmail = 'udin.sedunia@gmail.com'
let employeeAddress = ''

let employee1Name = 'Bambang Supratman'

let employee = {
  name: 'Udin Sedunia',
  number: 123123,
  email: 'udin.sedunia@gmail.com'
}


/**
 * Ex: Array
 * let names = ['Udin', 'Bambang', 'Budi']
 *                0         1         2
 */
employee.address = 'JKT'
employee.number = 'A-101234'
employee['email'] = 'udinsss@gmail.com'
employee.teammate = [
  {
    name: 'Bambang',
    number: 'A-111'
  }, 
  {
    name: 'Budi',
    number: 'A-121'
  }
]
employee.teammate.push({
  name: 'Jahn Dae',
  number: '131'
})
employee.laptop = {}
employee.laptop.brand = 'aapl'
employee.laptop.spec = {
  ram: '6gb',
  cpu: '12cores'
}
// console.log(employee.teammate[0].name) // Bambang




// console.log(employee['email'], 'email')
// console.log(employee)
// console.log(employee.name)
// var employeeProp = 'number'

// console.log(employee[employeeProp], 'get value based on key-var')
// console.log(Object.keys(employee.laptop.spec))



/**
 * Ex: Array
 * let names = ['Udin', 'Bambang', 'Budi']
 *                0         1         2
 */
let names = {}
names[1] = 'Bambang'
names['name1'] = 'Jahn Dae'
names[0] = 'Udin'
names[2] = 'Budi'

// console.log(names)


// Function
// Procedural Function
function showText(context) {
  console.log(`Learn ${context}`)
}

// Return Function
function getModifiedText(context) {
  console.log('inserted text: ' + context)
  return `Test function with this ${context}`
}

const result = showText('Javascript')
console.log(result, 'result')
console.log('------------------------------------------------------')
const result1 = getModifiedText('JS')
console.log(result1, 'result1')
console.log('------------------------------------------------------')


// Function callback

const tambah = function(num1, num2) {
  return num1 + num2
}

const resTambah = tambah(1,2)

// logic apapun itu menggunakan resTambah
console.log(resTambah, 'tambah fn')
console.log('------------------------------------------------------')


/**
 * param1: [number, number, number, number] as arrNum
 * param2: function() {} as plus
 *  */ 
const kalkulasi = function(arrNum, plus) { 
  let res1 = plus(arrNum[0], arrNum[1]) // tambah(1,2)
  let res2 = plus(arrNum[2], arrNum[3]) // // tambah(3,4)
  
  return res1 + res2
}

let resKalkulasi = kalkulasi([1,2,3,4], tambah)
console.log(resKalkulasi)
console.log('------------------------------------------------------')

const add = function(num1, num2, cb) {
  let res = num1 + num2
  cb(res)
}

const resAdd = add(1,2, function(output) {
  console.log(output)
})

const anotherCalculation = function() {}

console.log(resAdd)
console.log(anotherCalculation)
console.log('------------------------------------------------------')

// Arrow Function
const addNrmlFn = function() {}
const addArrFn = () => {}

const showTextArrwFn = () => {
  console.log('Hello World')
}

const showTextArrwFnWithReturn = () => 'Hello World'


console.log(showTextArrwFn(), 'showTextArrwFn')
console.log(showTextArrwFnWithReturn(), 'showTextArrwFn')
console.log('------------------------------------------------------')


