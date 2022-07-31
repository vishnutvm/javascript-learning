class arryGetAndDisplay{


     getArray(size) {
        console.log("getting  values to array");
      
        for (let i = 0; i < size; i++) {
          for (let j = 0; j < size; j++) {
            arr[i][j] = parseInt(prompt("Enter the values to array"));
          }
        }
      
      }
      
      
       displayArray(size) {
        document.write("The array : ");
        document.write("<br>");
      
        for (let i = 0; i < size; i++) {
          for (let j = 0; j < size; j++) {
            document.write(arr[i][j] + " ");
          }
          document.write("<br>");
        }
      }
      


}




var arr = new Array();

arr.push([], []);


var size = parseInt(prompt("enter size of the array"));

var arrAction = new arryGetAndDisplay()
arrAction.getArray(size)
arrAction.displayArray(size)
