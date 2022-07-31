
// 1
// 2 3
// 3 4 5
// 6 7 8 9 20

let size = parseInt(prompt("Enter the size"));
var dis = 1;

for (let i = 1; i < size; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(dis + "&nbsp");
    dis++;
  }
  document.write("<br>");
}
