1. how many data types do you know in JavaScript?
2. What's the difference between reference and primitive data types?
3. How can you declare variables in js and what's the difference?
4. What is hoisting in JS? 
5. Are let and const hoisted? What do you know or have you ever heard about temporary dead zone?
6. What is scope in JS? How many scopes do you know? And tell me please about lexical environment? Are functions block scope or not?
7. What happens under the hood of javascript when we treat reference types as a primitive types, for example pass array toString method()?

```javascript
const numbers = [1,2,3,4]
console.log(Number(numbers)) 1,2,3,4
console.log(String(numbers));"1", "2", 

const person = {
    name:"Marsel"
}
console.log(Number(person));
console.log(String(person));
```

8. How many ways do you know to copy object? Bring examples where you can do deep copy.
9. In JavaScript what is an arguments object inside of function? How can you convert it to an array?
10. Have you ever used map and foreach? what's the difference between forEach and map methods?
11. For what we use object descriptors? And besides descriptors do you know other Object static methods which do the same thing?
12. What array.methods do you know that mutate the original array?
- pop, push, shift, unshift, splice, sort, reverse
13. How can we define function in JS? What's difference between function declaration and arrow function?
14. Can be used Arrow function as a constructor function? 
15. WHat's the difference between call, apply, bind methods?
16. What is closure? Does IIFE create closure? Can you bring the most famous example for you?
17. What new features did ES6 introduce?
18. What is this? What kind of way do you know to change the context of this?

```js
const person = {
  name: "Marsel",
};
function getName() {
  const returnValue = () => {
    return this.name;
  };

  return returnValue();
}
console.log(getName.call(person));
```

19. Imagine you have called bind for some function, can you call bind again for that function?
20. What is proto and prototype? How many ways do you know to change proto of that object?
21. What is the main principles of OOP? What is overriding and overloading?
22. Whats the difference between pure function and high-ordered function?
23. What is class, what's the difference between class and constructor function?
24. Are Private, Static and protected methods and properties being inherited?
25. How many ways do you know to save data in Browser?
26. What is the difference between synchronous and asynchronous programming?

27. What are Promises? How do Promises work? What kind of promise methods do you know?
29. What is the advantage of using promises over callbacks?
30. Can you explain what async/await means in the context of JavaScript? And what return async function how you can handle it?
31. Can you explain how in JavaScript event loop works?
32. What is memory leak in JS? and how we can avoid it?
33. What is stack overFlow in JS and how we can avoid it?

```js
let obj = {
    name: "Abhi",
    age: 28,
    info: function() {
        console.log(`${this.name}  is  ${this.age} year's old`);
    },
};
let obj1 = {
    name: "Vikash",
    age: 28,
};

obj.info.bind(obj1)();
```

```js
// 1
var studentName = "Frank";
console.log(studentName);
var studentName;
console.log(studentName);
var studentName = undefined;
console.log(studentName);

//

var myVar = 100;
function WhoIsThis() {
  this.myVar = 200;
  this.display = function () {
    var myVar = 300;
    alert("myVar = " + myVar);
    alert("this.myVar = " + this.myVar);
  };
}
var obj = new WhoIsThis();
obj.display();

//

function a() {
  this.site = "Ayush";
  function b() {
    console.log(this.site);
  }
  b();
}
var site = "Wikipedia";
console.log(new a());
```

```js
const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);
///

const foo = function () {
  this.x = 5;
  (function () {
      this.x = 3;
  })();
  console.log(this.x);
};

const obj = {
  x: 4,
  logger: function () {
This = {}
      console.log(this.x);
  }
};

foo(); 
new foo(); 
obj.logger(); 
new obj.logger();



//

class Service {
  constructor() {
    this.numbers = [1, 2, 3];
    this.token = "token";
  }

  doSomething() {
    setTimeout(() => {
      this.numbers.forEach(function log(number) {
        console.log(number);
      });
    }, 100);
  }
}

let service = new Service();
service.doSomething();
```




```js
import { createReadStream, createWriteStream } from "fs";

function createTransformStream() {
  const readFile = createReadStream("./text.txt", {
    highWaterMark: 2,
    encoding: "utf-8",
  });
  const missHello = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().replaceAll("hello", ""));
    },
  });
  const writeFile = createWriteStream("./text1.txt");
  readFile.pipe(missHello).pipe(writeFile);
}
createTransformStream();
```
