// File: speedDetector.js

const readline = require('readline');

// Create an interface to read input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to check the speed and calculate demerit points
function checkSpeed(speed) {
  const speedLimit = 70;
  const pointsPerDemerit = 5;
  const maxDemeritPoints = 12;

  // Validate input
  if (isNaN(speed) || speed < 0) {
    console.log('Invalid input. Speed should be a positive number.');
    rl.close();
    return;
  }

  // Check for speed violation
  if (speed <= speedLimit) {
    console.log('Ok');
  } else {
    // Calculate demerit points
    let demeritPoints = Math.floor((speed - speedLimit) / pointsPerDemerit);

    // Display demerit points
    console.log(`Points: ${demeritPoints}`);

    // Check for license suspension
    if (demeritPoints > maxDemeritPoints) {
      console.log('License suspended');
    }
  }

  // Close the interface
  rl.close();
}

// Prompt user for input
rl.question('Enter car speed: ', (input) => {
  const carSpeed = parseFloat(input);
  checkSpeed(carSpeed);
});

