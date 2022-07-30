// java script code  to diplay the user input character

// var displayChar = () =>{

//     var enterdValue =document.getElementById("enterChar").value;
//     console.log("The enterd character is : "+enterdValue)
// }

// accept two input from  the user and output the sum

// let firstNum = parseInt( prompt("Enter the first number"));
// let secondNum = parseFloat(prompt("Enter the second number"));

// let result = firstNum + secondNum;
// console.log( `The sum of ${firstNum} and ${secondNum} is ${result}`)

// program to find simple interest

// var calSimple = ()=>{

// var p = parseInt( document.getElementById("principal-amt").value)
// var r = parseFloat(document.getElementById("interest-rate").value)
// var n = parseFloat( document.getElementById("years").value)

// var si = (p*r*n)/100;
// console.log(`The principal amount is ${p}\nThe interest rate is ${r}\nNumber of years${n}\nThe simple interest is: ${si}`);

// }

// program for check wether the student passed or faled

// function passOrnot(){
//     var mark = parseFloat(document.getElementById("marks").value)
//     if(mark<50){
//         console.log("faild")
//     }else if(mark>100){
//         console.log("Wrong entry")
//     }else{
//         console.log("passed")
//     }
// }

// program for find he mark persentage

// let submit = document.getElementById("submit")
// submit.addEventListener("click",()=>{
//  let mark =parseFloat(document.getElementById("mark").value)

//  if(mark<50){
//     console.log("Failed")
//  }else if(mark<60){
//     console.log("Your grade E")
//  }else if(mark<70){
//     console.log("Your grade D")
//  }else if(mark<80){
//     console.log("Your grade C")
//  }else if(mark<90){
//     console.log("Your grade B")
//  }else if(mark<=100){
//     console.log("Your grade A")
//  }

// })

//  enter the number and output date

// let submit = document.getElementById("submit")
// submit.addEventListener("click",()=>{
//     let number = parseFloat( document.getElementById("number").value);

//     switch(number){
//         case 1:
//             console.log("Sunday")
//             break;

//         case 2:
//             console.log("Monday")
//             break;
//         case 3:
//             console.log("Tuesday")
//             break;
//         case 4:
//             console.log("Wednesday")
//             break;
//         case 5:
//             console.log("Thursday")
//             break;
//         case 6:
//             console.log("Friday")
//             break;
//         case 7:
//             console.log("Saturday")
//             break;
//         default:
//             console.log("Invalid Entry ")
//     }
// })

// // multiplication table

// let multi = document.getElementById("multi")
// multi.addEventListener("click",()=>{
//     let num =  parseInt(document.getElementById("num").value)

//     for(let i =1;i<=12;i++){

//     let dis=document.createElement("p")

//     dis.innerText = `${i} x ${num} = ${i * num}`;
//     document.body.appendChild(dis)

//     // let br=document.createElement("br")
//     // document.body.appendChild(br)
//     }
// })

//  sum of odd numbers

// let odd = document.getElementById("odd")
// odd.addEventListener("click",function(){
//    let limit= parseInt(document.querySelector("input").value)

//     let sum = 0

//     for(let i=1;i<=limit;i++){

//         if(i % 2 !== 0){
//         sum = sum + i;
//     }
//     }
//     console.log("Sum of odd numbers : "+sum)

// })

// pattrnt printing
// 1
// 12
// 123
// 1234
// 12345

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         document.write(j)
//     }

//     document.write("<br>")
// }

// array swapping ( 2part get value and swap)

// var sizeBtn = document.getElementById("size-btn");
// var arr1Btn = document.getElementById("arr1-btn");
// var arr2Btn = document.getElementById("arr2-btn");
// var swap = document.getElementById("swapp-btn");

// var size = 0;
// var arr1 = [];
// var arr2 = [];

// // program to get value
// sizeBtn.addEventListener("click", () => {
//   sizeBtn.disabled = true;

//   size = parseInt(document.getElementById("size").value);

//   var btnCount = 0;

//   arr1Btn.addEventListener("click", () => {
//     if (btnCount <= size) {
//       var value1 = parseInt(document.getElementById("array-1-value").value);
//       arr1.push(value1);
//     }
//     if (btnCount == size - 1) {
//       arr1Btn.disabled = true;
//        btnCount = -1;
//     }

//     btnCount = btnCount + 1;
//   });

//   arr2Btn.addEventListener("click", () => {

//     if (btnCount <= size) {
//       var value2 = parseInt(document.getElementById("array-2-value").value);
//       arr2.push(value2);
//     }
//     if (btnCount == size - 1) {
//       arr2Btn.disabled = true;
//     }

//     btnCount = btnCount + 1;
//   });

// });

// // program to swap

// var swapArr = ()=>{
//     for(let i=0;i<size;i++){
//        arr1[i] =arr1[i]+arr2[i]
//        arr2[i] = arr1[i]  - arr2[i];
//        arr1[i] = arr1[i] - arr2[i];
//     }
// }

// swap.addEventListener("click",()=>{
//     document.write("array 1: "+arr1+"<br>")
//     document.write("array 2: "+arr2+"<br>")
//     document.write("After swap: "+"<br>")
//     swapArr()
//     document.write("array 1: "+arr1+"<br>")
//     document.write("array 2: "+arr2+"<br>")

// })

// var sizeBtn = document.getElementById("size-btn");
// var val = parseInt(document.getElementById("array-value").value)
// var size ;
// var count =0;

// var arr =[]

// sizeBtn.addEventListener("click",()=>{
//    size = parseInt(document.getElementById("size").value) ;
//     sizeBtn.disabled= true;

// // getting values to array

//     let  arrBtn = document.getElementById("arr-btn");
//     arrBtn.addEventListener("click",()=>{
//         var val = parseInt(document.getElementById("array-value").value)

//        console.log(val)
//         arr.push(val);
//         if(count==size-1){
//             arrBtn.disabled=true;
//         }
//         count = count+1;

//         document.getElementById("array-value").value= "";

//         })

//     })

//     var convert = document.getElementById("count-btn");
//     convert.addEventListener("click",()=>{
//         console.log(arr)
//         for(let i=0;i<size/2;i++){
//             arr[i] = arr[i]+ arr[(size-i)-1];
//             arr[(size-i)-1]=  arr[i]- arr[(size-i)-1];
//             arr[i]=arr[i]- arr[(size-i)-1];
//         }

//         console.log("array after sort",arr);
//     })

// var btn = document.getElementById("submitBtn");
// btn.addEventListener("click", () => {
//   var flag = 0;
//   var strVal = document.getElementById("getString").value;
//   var len = strVal.length;

//   for (i = 0; i <= len / 2; i++) {
//     if (strVal[i] != strVal[len - i - 1]) {
//       flag = 1;
//       break;
//     }
//     if (flag != 1) {
//       console.log("This is a palinrome number");
//     }
//   }
// });
