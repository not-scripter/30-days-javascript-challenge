//NOTE: Activity 1
//NOTE: Task 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//NOTE: Task 2
for (let i = 1; i <= 10; i++) {
  console.log(i * 2);
}

//NOTE: Activity 2
//NOTE: Task 3
let sum = 0;
let val = 0;
while (val < 10) {
  sum += val;
  val++;
}
console.log(sum);

//NOTE: Task 4
let value = 10;
let valueOne = 0;
while (value >= 1) {
  console.log(value);
  value--;
}

//NOTE: Activity 3
//NOTE: Task 5
let numOne = 1;
do {
  console.log(numOne);
  numOne++;
} while (numOne <= 5);

//NOTE: Task 6
function factorialize(num) {
  let tNum = num;
  do {
    num--;
    return num * tNum;
  } while (num > 1);
}
console.log("factorialize", factorialize(5));

//NOTE: Activity 4
//NOTE: Task 7
function nestedPattern(num) {
  let print = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      print += "*";
    }
    console.log(print);
  }
}
nestedPattern(5);
