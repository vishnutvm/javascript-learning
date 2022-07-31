let userHeight;
userHeight = 150;

try {
  if (userHeight <= 200 && userHeight >= 40) {
    console.log("valid");
  }
  if (isNaN(userHeight)) throw "notANumberError";
  if (userHeight > 200) throw "HugeHeightError";
  if (userHeight < 40) throw "TinyHeightError";
} catch (e) {
  console.error(e);
}
