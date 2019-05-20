const marks = [80, 85, 50];

// 1-59 F
// 60-69 D
// 70-79 C
// 80-89 B
// 90-100 A

console.log(calculateGrades(marks));

function calculateGrades(array) {
  let fullGrade = 300;
  let studentGrade = 0;
  let studentGradeInPercentage = 0;
  let studentGradeInAlphabet = '';

  for (const index of array) {
    studentGrade += index;
  }
  studentGradeInPercentage = (studentGrade / fullGrade) * 100;

  //studentGradeInAlphabet = studentGradeInPercentage <= 79 ? 'F' : '';

  if (studentGradeInPercentage >= 50 && studentGradeInPercentage <= 59) {
    studentGradeInAlphabet = 'F';
  }
  if (studentGradeInPercentage >= 60 && studentGradeInPercentage <= 69) {
    studentGradeInAlphabet = 'D';
  }
  if (studentGradeInPercentage >= 70 && studentGradeInPercentage <= 79) {
    studentGradeInAlphabet = 'C';
  }
  if (studentGradeInPercentage >= 80 && studentGradeInPercentage <= 89) {
    studentGradeInAlphabet = 'B';
  }
  if (studentGradeInPercentage >= 90 && studentGradeInPercentage <= 100) {
    studentGradeInAlphabet = 'A';
  }

  console.log('Your grade: ' + studentGrade);
  console.log(studentGradeInPercentage);
  console.log(studentGradeInAlphabet);
}

function calculateGradesInAlphapet(num) {
  if (num <= 79) return 'F';
}

// ! This is was my solution , Moth solution was very simple than mine
