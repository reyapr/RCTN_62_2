import { hardCodedIDText, Employee } from "./Employee.js";
import Person from './Person.js'

console.log(hardCodedIDText, 'hardCodedIDText')
const budi = new Person('budi', 20)
console.log(budi, 'budi')
console.log(budi.getName(), 'budi')
// console.log(budi.doWork(), 'budi is an unemployee') should throw an error
const udinEmployee = new Employee('udin', 23, 'A123123') // instantiate 

console.log(udinEmployee, 'udin employee')
console.log(udinEmployee.getName(), '==udin')
console.log(udinEmployee.doWork(), '==udin')
// console.log(udinEmployee.doWork(),'udinEmployee do work')

const bambangEmployee = new Employee('bambang', 25, 'B123123')
console.log(bambangEmployee, 'bambang employee')
console.log(bambangEmployee.getName(), '==bambang')