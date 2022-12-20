/**
 * blueprint create
 *  Employee with
 *    name prop
 *    weight prop
 *    weightUnit prop
 *    id prop
 *  */ 

class Person {
  /**
   * constructor on Class similar like 
   * function MyEmployee(name) {
      }
  */
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  
  getName() {
    return this.name
  }
}

class Employee extends Person {
  constructor(name, age, employeeId) {
    super(name, age)
    this.employeeId = employeeId
  }
  
  doWork() {
    return 'complete!'
  }
  
  getName() {
    return `Hi I\'m ${this.name} with employee id: ${this.employeeId}`
  }
}

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