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
  constructor(name) {
    this.name = name
  }
  
  getName() {
    return this.name
  }
}

class Employee extends Person {
  
  doWork() {
    return 'complete!'
  }
}

const budi = new Person('budi')
console.log(budi, 'budi')
// console.log(budi.doWork(), 'budi is an unemployee') should throw an error
const udinEmployee = new Employee('udin') // instantiate 

console.log(udinEmployee.getName(), '==udin')
console.log(udinEmployee.doWork(), '==udin')
// console.log(udinEmployee.doWork(),'udinEmployee do work')

const bambangEmployee = new Employee('bambang')
console.log(bambangEmployee.getName(), '==bambang')