1. Who developed JavaScript, and what was the first name of JavaScript?

- JavaScript was developed by Brendan Eich, who was a Netscape programmer. Brendan Eich developed this new scripting language in just ten days in the year September 1995. At the time of its launch, JavaScript was initially called Mocha. After that, it was called Live Script and later known as JavaScript.

2. What is the difference between JavaScript and JScript?

- Netscape provided the JavaScript language. Microsoft changed the name and called it JScript to avoid the trademark issue. In other words, you can say JScript is the same as JavaScript, but Microsoft provides it.

3. Can we use await only with promises?

- No, we can use await with promise as well as any object that implements a then function.
```js
const thenable = {
  then: function(callback) {
    setTimeout(() => callback(2), 100);
  }
};
const value = await thenable;
console.log(value); // 2
```

4. Is it possible to chain promises together? If yes, then how?

- Yes, it is possible to chain promises together. This can be done by returning a promise from the then() function of a previous promise. The returned promise will then be resolved or rejected based on the resolution of the promise that it is chained to.


4. What will be the output?

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

5. What is ParameterScope and what will be the output?

```js
function parameterScope(a, cb = ()=>a){
  var a = 12
  return cb()
}

let a = 45

console.log(parameterScope(12))
```