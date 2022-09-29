
Let's start from the first question.

0. Can you tell us a bit yourself?
0. Do you know other programming languages? Why exactly JS? 
0. Do you know node.js? Would you like to learn and go deeper into node.js?

1. how many data types do you know in JavaScript?

2. What's the difference between reference and primitive types?

3. How can you declare variables in js and what's the difference?

4. What is hoisting in JS? 

5. Are let and const hoisted? What do you know or have you ever heard about temporary dead zone?

6. How many ways do you know to copy object or to create an object?

7. What happens under the hood of javascript when we treat reference types as a primitive types, for example pass array toString method()?

8. In JavaScript what is an argument object? How can you convert it to an array?

9. The difference between forEach and map methods?

10. For what we use object descriptors? And besides descriptors do you know other Object static methods which do the same thing?

11. What array.methods do you know that mutate the original array?
- pop, push, shift, unshift, splice, sort, reverse

12. How we can define function in JS? What difference between function declaration and arrow function?

13. Can we use apply, bind, call for arrow function? and what's the difference between call, apply, bind?

14. Can be used Arrow function as a constructor function? 

15. What is closure? Does IIFE create closure? Can you bring the most famous example for you?

16. What new features did ES6 introduce?

17. Whats the difference between Array.isArray and rest operator? Can you use rest with arguments?

18. What is this? What kind of way do you know to change the context of this?

19. Imagine you have called bind for some function, can you call bind again that function?

20. What is proto and prototype?

21. What is the main principles of OOP? What is overriding and overloading?

22. Whats the difference between pure function and high-ordered function?

23. What is class, what's the difference between class and constructor function?

24. Are Private, Static and protected methods and properties being inherited?

25. How many ways do you know to save data in Browser?

26. What is the difference between synchronous and asynchronous programming?

27. What is a Promises? How Promises work?

29. What is the advantage of using promises over callbacks?

30. Can you explain what async/await means in the context of JavaScript?

31. Can you explain how in JavaScript event loop works?

```js
function bark() {
  console.log('Woof!');
}
bark.animal = 'dog';
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













