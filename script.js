let arr = [1, 2, 3, 4, 5];

let myFilter = (myArray, callback) => {
  let respons = callback(myArray);
  console.log(respons);
};
let oddOrEven = (array) => {
  let sum = 0;
  let evenOrOdd;
  for (let i = 0; i < array.length; i++) {
    sum = sum + arr[i];

    if (sum % 2 == 0) {
      evenOrOdd = true;
    } else {
      evenOrOdd = false;
    }
  }
  console.log(sum);
  return evenOrOdd;
};

myFilter(arr, oddOrEven);
