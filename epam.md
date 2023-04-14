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

```js
function bark() {
  console.log('Woof!');
}
bark.animal = 'dog';
console.log(bark.animal)
```

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
```

32. What is memory leak in JS? and how we can avoid it?

33. What is stack overFlow in JS and how we can avoid it?








