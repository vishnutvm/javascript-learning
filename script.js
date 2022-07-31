class area {
  circle(r) {
    this.result = 3.14 * (r * r);
  }

  square(a) {
    this.result = a * a;
  }
  rectangile(w, l) {
    this.result = w * l;
  }

  triangle(b, h) {
    this.result = (b * h) / 2;
  }
}

class MyClass extends area {
  main() {
    let choice = parseInt(
      prompt("Enter your choice\n1-Circle\n2Square\n3-Rectangle\n4-Triangle")
    );
    switch (choice) {
      case 1:
        var r = parseFloat(prompt("Enter the radious of the circle"));
        this.circle(r);
        break;
      case 2:
        var a = parseFloat(prompt("Enter side of squre"));
        this.square(a);
        break;
      case 3:
        var l = parseFloat(prompt("Enter the lenth"));
        var w = parseFloat(prompt("Enter the width"));
        this.circle(w, l);
        break;
      case 4:
        var b = parseFloat(prompt("Enter the base"));
        var h = parseFloat(prompt("Enter the height"));
        this.circle(b, h);
        break;
    }

    console.log("The are is " + this.result);
  }
}

var obj = new MyClass();
obj.main();
