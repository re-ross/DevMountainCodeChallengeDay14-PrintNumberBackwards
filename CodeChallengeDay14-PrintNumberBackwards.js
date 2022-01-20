let reverse = 0; // setting value of reverse to use in function
let lastDigit; // setting lastDigit as a value to be used later in function

printDigits = (num) => {
  while (num != 0) {
    // loop will run while num is not equal to 0
    lastDigit = num % 10; // use modulo 10 to retrieve last digit of number
    reverse = reverse * 10 + lastDigit;
    // after finding and returning last digit from number, use below to remove last digit.
    num = Math.floor(num / 10);
    console.log(lastDigit);
  }
};

printDigits(321);
