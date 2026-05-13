console.log("justin");

class Person {
  constructor(firstName) {
    this.firstName = firstName; //constructor is a special type of function is used inside the class to create variable For our class.
  }

  walk() {
    console.log(`"${this.firstName} will start walking"`);
  }
}

let obj1 = new Person("jboss");
obj1.walk();

class Employe extends Person {
  constructor(firstName) {
    super(firstName);
  }
  work() {
    console.log(`${this.firstName} is a coder`);
  }
}

let obj2 = new Employe("Mendonsa");
obj2.work();
