//Destructure console
const { log } = console;

const form = document.getElementById("form");
const input = document.getElementById("userInput");
const feedback = document.getElementById("feedback");
let year = document.getElementById("year");

/* Write a program to check whether a number is an armstrong number or not. Return true if the number is Arm Strong otherwise return false */
/* Armstrong number example: 1^3 + 5^3 + 3^3 = 153 */

const isArmStrong = (digits) => {
  // set the value of userinput to the parameter that is being passed when function is called
  let userInput = Number(digits);
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
    return true;
  } else {
    return false;
  }
};
// log(isArmStrong(100000000000));
// PS: logging this function will display the returned result in console

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userInput = form.userInput.value;

  /* Input validation */
  /* If input is empty and user tries to submit, change the input border color to red as an error message*/
  if (userInput === "") {
    input.classList.add("emptyInput");
    feedback.textContent = "";

    /* remove the error message after 3 seconds */
    setTimeout(() => {
      input.classList.remove("emptyInput");
    }, 3000);
  } else {
    /* if user enter\s a value while the error message is still on, remove the error message and proceed */
    input.classList.remove("emptyInput");

    /* Get the value of the user from input */

    /* execute function and pass userInput as parameter,  save the returned result in checker */
    let checker = isArmStrong(userInput); // this function will return True or false

    if (checker) {
      // if true, display success message
      const message = `${userInput} is AN Arm Strong Number`;

      feedback.textContent = message;
      feedback.classList.remove("notarmstrong"); // remove class if present
      feedback.classList.add("armstrong"); // add succes class style
    } else {
      // if false
      const message = `${userInput} is NOT Arm Strong Number`;

      feedback.textContent = message;
      feedback.classList.remove("armstrong"); // remove class if present
      feedback.classList.add("notarmstrong"); // add error class style
    }
  }
});

// getting copyright year dynamically
year.textContent = new Date().getFullYear();

// THOUSAND WAYS TO SOLVE THIS CHALLENGE, HERE IS MINE AND IT WORKS.
// HAPPY CODING
// TIMMYSTROGE : )
