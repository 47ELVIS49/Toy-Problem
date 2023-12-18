const readline = require('readline');

// Create an interface to read input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt the user for input and generate corresponding grades
function generateStudentGrade() {
  // Prompt user for input
  rl.question('Enter student marks (between 0 and 100): ', (input) => {
    // Validate input
    let marks = parseFloat(input);

    if (isNaN(marks) || marks < 0 || marks > 100) {
      console.log('Invalid input. Marks should be between 0 and 100.');
      rl.close();
      return;
    }

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

    // Close the interface
    rl.close();
  });
}

// Call the function to execute the program
generateStudentGrade();
