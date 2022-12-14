// [Title] Variable Declaration
// variable declaration
let score
// console.log(score, '1')

// assignment
score = 100
console.log(score, '2')

// re-assignment
score = 90
// console.log(score, '3')

// declaration + assignment
let studentName = 'Udin'
// console.log(studentName, '4')

// declaration + assignment using const keyword
const isDone = false
console.log(isDone, '5')

// trying to re-assignment for const variable
// isDone = true
// console.log(isDone, '6')

const companyName = 'Hacktiv8'


// [Title] Variable Name
// supported variable names on javascript
let age;
let student_name; // snake case
let lifeCycleCount; // camel case
let user1;

// let let;

// Data Type
let myScore = 100
console.log('tipe data myScore: ', typeof myScore)
let myName = 'Udin'
console.log('tipe data myName: ', typeof myName)
let isGood = false
console.log('tipe data isGood: ', typeof isGood)

// Data Type - Number
let udinScore = 200
let bambangScore = 100

bambangScore = 'nilai 100'

let averageMyClassScore = (udinScore + bambangScore) / 2

console.log(averageMyClassScore, 'averageMyClassScore')

let count = 1

// increment
count++
console.log(count, 'count')

// decrement
count--
console.log(count, 'count')

count += 3 // ==> count = count + 3
console.log(count, 'count')

// Data Type - String
let udinName = 'Udin'
let bambangName = "Bambang"

let text = "He's good"
let text1 = 'A: "Hey"'
let text2 = 'He\'s good'
console.log(text, text2, '-- text & text2')
console.log(text2.length, 'text2 length')

// accessing char on string
console.log(text2[1], 'index 1 on text2')
console.log(text2[text2.length - 1], 'get last index value on text2')

text[1] = 'a'

const concatedStringWithNum = 'H' + 9
const concatedStringWithBoolean = 'H' + true
console.log('H' + '8')
console.log(concatedStringWithNum, typeof concatedStringWithNum)
console.log(concatedStringWithBoolean, typeof concatedStringWithBoolean)

let fullName = 'John'
let middleName = ' Doe'
let lastName = ' Doe'

fullName += middleName
fullName += lastName

console.log(fullName)

// Template literal
// let text3 = fullName + `: "He's very good"`
// can be simplify to this
let text3 = `${fullName}: "${text2}"`
console.log(text3)

// Data type - Boolean
let isValid = true

console.log(isValid, 'is valid')
console.log(!isValid, 'negation of isValid')

console.log(10 > 9, '10 is greater than 9')
console.log(10 == 9, '10 is equal 9')
console.log(10 === 10, '10 is equal 10')
console.log(10 == '10', '10(number) is equal 10(string) compared with ==')
console.log(10 === '10', '10(number) is equal 10(string) compared with ===')



let student1 = 'Udin Sedunia'
let student2 = 'Bambang Aja'


let arr1 = new Array(10,20,30,40,50)
console.log(arr1)

let arr2 = new Array(5)
console.log(arr2)

// declaration
let arr = []

// declaration + assignment
let students = ['Udin Sedunia', student2]
let nums = [5]
console.log(students, 'array')
console.log(nums, 'nums')

// array method
nums.push(6)
console.log(nums, 'nums')

nums.unshift(4)
console.log(nums, 'nums')

console.log(nums.length, 'nums.length')
console.log(nums[1], 'nums index of 1')

// re-assignment on selected index
nums[1] = 10
console.log(nums, 'nums')

// concat between array
let fruits1 = ['mango', 'apple', 'pear']
let fruits2 = ['papaya', 'guava']

// fruits1.push.apply(fruits1, fruits2)
// console.log(fruits1, 'fruits')

let myFruits = [...fruits1, ...fruits2]

console.log(myFruits, 'myFruits')

// built in function
let arrNums = [1,2,3,4,5]
let slicedArrNums = arrNums.slice(2)
console.log(slicedArrNums, 'slicedArrNums')
console.log(arrNums.slice(2,4))
console.log(arrNums.slice(-2), 'arrNums.slice(-2)')
console.log(arrNums.slice(2, -1), 'arrNums.slice(2, -2)')

console.log(arrNums, 'arrNums')

let arrNums1 = [1,2,3,4,5]
console.log(arrNums1.splice(2, 1))
console.log(arrNums1, 'arrNums1')

console.log(arrNums1.splice(1, 3), 'arrNums1.splice(1, 3)')
console.log(arrNums1, 'arrNums1')

let months = ['Jan', 'Mar', 'Apr', 'June']

months.splice(1, 0, 'Feb')
console.log(months, 'months')

months.splice(-1, 1, 'Jun', 'Jul')
console.log(months, 'months')

let myNums = [1,2,3]

myNums = []
console.log(myNums)

let rack = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

console.log(rack)
console.log(rack[0], 'rack[0]')
console.log(rack[1], 'rack[1]')

rack[0].push(45)
console.log(rack, 'rack')

rack.push([10,11,12])
console.log(rack, 'rack')








