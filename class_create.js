class Person {
 
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  const person1 = new Person('Nishi', 'Reena');
  console.log(person1.firstName); 
  console.log(person1.fullName()); 
  
  