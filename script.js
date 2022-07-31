class Calculaton {
  addition(num1, num2) {
    this.result = num1 + num2;
    this.display();
  }

  substraction(num1, num2) {
    this.result = num1 - num2;
    this.display();
  }
  multiplication(num1, num2) {
    this.result = num1 * num2;
    this.display();
  }
  division(num1, num2) {
    this.result = num1 / num2;
    this.display();
  }

  display() {
    console.log("result :   "+this.result);
  }
}

let main = () => {
  var num1 = parseInt(prompt("Enter the first num"));
  var num2 = parseInt(prompt("Enter the second num"));

  var calc = new Calculaton();

  var option = parseInt(
    prompt(
      "Enter your choise:\n1-addintion\n2-substraction\n3-multiplication\n4-division"
    )
  );

  switch (option) {
    case 1:
      calc.addition(num1, num2);
      break;
    case 2:
      calc.substraction(num1, num2);
      break;
    case 3:
      calc.multiplication(num1, num2);
      break;
    case 4:
      calc.division(num1, num2);
      break;
  }
};


main()