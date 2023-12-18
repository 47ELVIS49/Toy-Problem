// File: studentGradeGenerator.js

function generateStudentGrade() {
    // Prompt user for input
    let marks = prompt("Enter student marks (between 0 and 100):");
  
    if (isNaN(marks) || marks < 0 || marks > 100) {
      console.log("Invalid input. Marks should be between 0 and 100.");
      return;
    }
  
    // Convert marks to a number
    marks = Number(marks);
  
    // Determine grade based on the given criteria
    let grade;
    if (marks > 79) {
      grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
      grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
      grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
      grade = 'D';
    } else {
      grade = 'E';
    }
  
    // Display the result
    console.log(`Student Grade: ${grade}`);
  }
  
  generateStudentGrade();
  