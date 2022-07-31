    let num = parseInt(prompt("Enter a number"))
    var flag;
    console.log(num)
    for(i=2;i<=num/2;i++){
        flag =0;
    
        if(num%i == 0){
            flag=1;
            break;
        }
    }
    if(flag == 1 && i != 1 && i!= 0){
        console.log("This number is not a prime number ")
    }else{
        console.log("This is a prime number")
    }