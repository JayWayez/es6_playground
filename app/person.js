import $ from "jquery";

class Person {
  // class is like instruction on how to build that object
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    // this is es5 version --> return "Hello, my name is " + this.name;
    return `Hello, my name is ${this.name}. Age is ${this.age}.`;
  }

  sayGoodbye() {
    return `${this.name}, it's time to say goodbye.`;
  }
}

class SuperPerson extends Person {
  constructor(name, age) {
    super(name, age);
    this.age = age;
  }
  superSayHi() {
    return `Hi, My name is ${this.name}.`;
  }

  sayHello() {
    const container = $("<h1>", {
      text: super.sayHello()
    });

    $("#root").append(container);

    //************* core javascript way **************//
    // const container = document.createElement("h1");

    // container.innerText = super.sayHello();

    // document.getElementById("root").appendChild(container);
    //************************************************//

    return `SUPER! it worked!`;
  }
}

export default SuperPerson;
