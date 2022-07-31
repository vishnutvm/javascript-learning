let my_string ;
my_string =(1234)

try {
  my_string = my_string.split("").reverse().join(",");

  console.log(`Reversed string is : ${my_string}`);
} catch (error) {
  console.log(`Error: ${error}`);
} finally {
  console.log(`Type of my string is : ${typeof my_string}`);
}
