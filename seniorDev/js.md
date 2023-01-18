0. Is JS single threaded? can we make it multi-thread? have you ever heard about web-workers? And if in the browser the global object is window, which is the global object in web-workers?

1. Can you explain What happens under the hood of javascript when we treat reference types as a primitive types, for example pass array to isNaN() function?
Do you know about symbol.toPrimitive()
console.log([1] == true);

1. Can you explain what is a closure and why they are important when dealing with asynchronous code?

A closure is a function that remembers the environment in which it was created, even if that environment no longer exists. This is important when dealing with asynchronous code because it allows you to create a function that will be executed at a later time, but still have access to the variables and data that it needs.

2. Have you ever heard about memory leak and stackOverFlow in JS? How to avoid from them?

3. What is hoisting in JS and do you know about Temporary Dead Zone? Are all the variables hoisted?

4. what is scope in JS? How many scopes do you know? And tell me please about lexical environment or variable environment? And have you ever heard about parameter scope?

What do you think about idea that function parameters are basically the same as locally declared variables in the function scope. is it true or not? just it's not always true.

```js
function parameterScope(a, cb = ()=>a){
  var a = 12
  return cb()
}

console.log(parameterScope(13)) 
```

5. How many ways do you know to copy object? Bring examples where you can do deep copy. structuredClone

6. Whats the deference between objects and complex data structures, In this case I mean map and weekMap?

7. How many mutable array methods do you know in js? Is it good idea to use mutable methods? 

When you create a new object, the V8 engine will create a new hidden class for that. Then, if you modify that same object by adding a new property, the V8 engine will create a new hidden class with all the properties from the previous class and include the new property.

8. What difference between function declaration and arrow function? Can be used Arrow function as a constructor function? or can we use call, apply, bind with arrow function?

9. Can I add properties on function? and if yes why it is possible?

10. What's the difference between constructor function and classes? And do you know the difference between derived constructor and regular constructor? and how does it affect on behavior with new?

11. What is proto and prototype in js? 

12. Can you explain what is this in JavaScript? What kind of way do you know to change the context of this?

```js
class Chameleon {
 colorChange(newColor) {
      this.newColor = newColor;
      return this.newColor;
    }
  
    constructor({ newColor = 'green' } = {}) {
        console.log(newColor);
      this.newColor = newColor;
    }
  }
  
  const freddie = new Chameleon({ newColor: 'purple' });
  console.log(freddie.colorChange('orange'));
```

13. What's the advantage of using promises over callbacks?

14. Why do we need a promise and What are the three states of promise?

15.  What are pure function and higher order function?

16. What is your understanding of the Event Loop concept in JavaScript?

17. What is tree shaking?

Tree shaking is a form of dead code elimination. It means that unused modules will not be included in the bundle during the build process and for that it relies on the static structure of ES2015 module syntax,( i.e. import and export). Initially this has been popularized by the ES2015 module bundler rollup.

18. What’s the best way to implement singleton patterns using async functions in JavaScript?
The best way to implement singleton patterns using async functions in JavaScript is to make sure that the function is only called once, and then to save the result of that function call in a variable. This way, subsequent calls to the function will simply return the saved result, rather than trying to call the function again.




