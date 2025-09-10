// Challenge :Grade generator for students
function grade() {
  let mark = prompt("Mark (0 - 100):");
  mark = Number(mark);

  //Marks greater than 79 but less than or equal to 100
  if (mark > 79 && mark <= 100) {
    return "A";
    //Marks between 60 and 79
  } else if (mark >= 60 && mark <= 79) {
    return "B";
    //Marks between 49 and 59
  } else if (mark >= 49 && mark <= 59) {
    return "C";
    //Marks between 40 and 49
  } else if (mark >= 40 && mark <= 49) {
    return "D";
    //Marks less than 40
  } else if (mark >= 0 && mark < 40) {
    return "E";
    //for empty or invalid inputs like negatives
  } else {
    return "Invalid input";
  }
}

console.log(grade());
