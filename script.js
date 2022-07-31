let arr1 = new Array();
let arr2 = new Array();
let size = parseInt(prompt("Enter thee size of array"));

for (let i = 0; i < size; i++) {
  arr1.push(parseInt(prompt("Enter the values in array")));
}

// multipling and store in another array

for (let i = 0; i < size - 1; i++) {
  arr2.push(arr1[i] * arr1[i + 1]);
}

// displaying the array

for (let i = 0; i < size - 1; i++) {
  console.log(arr2[i]);
}
