let power = (b, e) => {
  let r = 1;
  for (let i = 1; i <= e; i++) {
    r = r * b;
  }
  return r;
};

let amstrong = (num) => {
  let temp1 = num;
  let temp2 = num;
  total_digit = 0;
  while (temp1 != 0) {
    temp1 = Math.floor(temp1 / 10);
    total_digit++;
  }
  let sum = 0;
  while (temp2 != 0) {
    let digit = temp2 % 10;
    sum = sum + power(digit, total_digit);
    temp2 = Math.floor(temp2 / 10);
  }

  if (sum === num) {
    return true;
  } else {
    return false;
  }
};

let result = amstrong(12);
if (result) {
  console.log("It is an amstrong number");
} else {
  console.log("It is not an amstrong number");
}
