
let income = parseFloat(prompt("Enter your anual income"))

if(income<250000){
    console.log("No Tax")
}else if(income <500000){
    console.log(`income tax amount = ${(income * 5)/100}`)
}else if(income <1000000){
    console.log(`income tax amount = ${(income * 20)/100}`)
}else if(income <5000000){
    console.log(`income tax amount = ${(income * 30)/100}`)
}else{
    console.log("Your income is more than 500000")
}