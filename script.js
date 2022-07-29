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


let submit = document.getElementById("submit")
submit.addEventListener("click",()=>{
    let number = parseFloat( document.getElementById("number").value);


    switch(number){
        case 1:
            console.log("Sunday")
            break;

        case 2:
            console.log("Monday")
            break;
        case 3:
            console.log("Tuesday")
            break;
        case 4:
            console.log("Wednesday")
            break;
        case 5:
            console.log("Thursday")
            break;
        case 6:
            console.log("Friday")
            break;
        case 7:
            console.log("Saturday")
            break;
        default:
            console.log("Invalid Entry ")
    }
})


