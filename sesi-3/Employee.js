import Person from './Person.js'

export const hardCodedIDText = 'id'

export class Employee extends Person {
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