function car(name,mileage,max_speed){
  this.name = name
  this.mileage = mileage;
  this.max_speed = max_speed
}



const obj = new car("jaguar",19.5,235)
console.log(obj.name)
console.log(obj.mileage)
console.log(obj.max_speed)