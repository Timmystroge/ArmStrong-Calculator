/* Write a program to check whether a number is an armstrong number or not. Return true if the number is Arm Strong otherwise return false */
/* Armstrong number example: 1^3 + 5^3 + 3^3 = 153 */

//Destructure console
const { log } = console;

const isArmStrong = (digits) => {
  // set the value of userinput to the parameter that is being passed when function is called
  let userInput = digits;
  let armsCalc = 0;

  /* 
  Convert the interger from user input into an array of  digits
  i.e if user input: 12345
  the conversion will be: [1,2,3,4,5]
  */
  let armstrongNumber = Array.from(String(userInput), Number);

  // loop through the armstrongNumber array
  for (let i = 0; i < armstrongNumber.length; i++) {
    // set the value of armsCalc to the sum(addition) of each digit present in the array. (after getting the cube value of each of the digits)
    armsCalc += armstrongNumber[i] ** 3;
  }

  // check if the value of armsCalc === to userInput
  if (armsCalc === userInput) {
    // logging user inout and it's armStrong calculation
    log({ userInput }, { armsCalc });

    //return result
    return true;
  } else {
    // logging user inout and it's armStrong calculation
    log({ userInput }, { armsCalc });

    // return result
    return false;
  }
};
log(isArmStrong(153)); // PS: logging this function will display the returned result in console

// THOUSAND WAYS TO SOLVE THIS CHALLENGE, HERE IS MINE AND IT WORKS.
// HAPPY CODING
// TIMMYSTROGE : )
