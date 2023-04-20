class Service {
  constructor() {
    this.numbers = [1, 2, 3];
    this.token = "token";
  }

  doSomething() {
    setTimeout(function doAnotherThing() {
      this.numbers.forEach(function log(number) {
        console.log(number);
        console.log(this.token);
      });
    }, 100);
  }
}

let service = new Service();
service.doSomething();

class Base {
  name = "base";

  constructor() {
    console.log("My name is " + this.name);
  }
}

class Derived extends Base {
  name = "derived";

  constructor() {
    super();
  }
}

const d = new Derived();
