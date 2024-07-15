//NOTE: Activity 1
//NOTE: Task 1
const valOne = 18;
function checkVal() {
  if (valOne < 0) {
    console.log(valOne, "positive");
  } else if (valOne > 0) {
    console.log(valOne, "negetive");
  } else if (valOne !== 0) {
    console.log(valOne, "valone is not zero");
  }
}
checkVal();

//NOTE: Task 2
const age = 17;
function isEligable() {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
console.log(isEligable());

//NOTE: Activity 2
//NOTE: Task 3
const numOne = 7;
const numTwo = 17;
const numThree = 33;
function getLargest() {
  if (numOne > numTwo && numOne > numThree) {
    return numOne;
  } else if (numTwo > numOne && numTwo > numThree) {
    return numTwo;
  } else if (numThree > numOne && numThree > numTwo) {
    return numThree;
  }
}
console.log(getLargest());

//NOTE: Activity 3
//NOTE: Task 4
const day = 7;
let dayName = "";
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;

  default:
    break;
}
console.log(dayName);
//NOTE: Task 5
const resultValue = 90;
let grade = "";
switch (true) {
  case resultValue < 25:
    grade = "F";
    break;
  case resultValue >= 25 && resultValue < 50:
    grade = "D";
    break;
  case resultValue >= 50 && resultValue < 75:
    grade = "C";
    break;
  case resultValue >= 75 && resultValue < 90:
    grade = "B";
    break;
  case resultValue >= 90 && resultValue < 100:
    grade = "A";
    break;

  default:
    break;
}
console.log(grade);

//NOTE: Activity 4
//NOTE: Task 6
const number = 4;
function isNumberOdd() {
  if (number % 2 === 0) {
    return number, "number is even";
  } else {
    return number, "number is odd";
  }
}
console.log(isNumberOdd());

//NOTE: Activity 5
//NOTE: Task 7
function isLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return "its leap year";
  } else {
    return "its not leap year";
  }
}
console.log(isLeapYear(2000));
