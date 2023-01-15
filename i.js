function reverseArray(array) {
    let x = [];
  for (let i = 0; i < array.length; i++) {
   

    x.push(array.length - 1);

    array.pop();
  }

  return x;
}
console.log(reverseArray([1, 2, 3, 4]));
