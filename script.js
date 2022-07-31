var arr1 = new Array();
var arr2 = new Array();

arr1.push([], []);
arr2.push([], []);

var size = parseInt(prompt("enter size of the array"));

getArray(size);
addArray(size);
displayArray(size);

function getArray(size) {
  console.log("getting  values to array 1");

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      arr1[i][j] = parseInt(prompt("Enter the values to array 1"));
    }
  }

  console.log("getting values to array 2");

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      arr2[i][j] = parseInt(prompt("Enter the values to array 2"));
    }
  }
}

function addArray() {
  console.log("Adding the value of 2d arrays");

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      arr1[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
}

function displayArray() {
  document.write("sum of array 1 and array 2");
  document.write("<br>");

  for (let i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      document.write(arr1[i][j] + " ");
    }
    document.write("<br>");
  }
}
