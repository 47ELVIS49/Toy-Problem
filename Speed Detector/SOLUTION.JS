// File: speedDetector.js

// Function to check the speed and calculate demerit points
function checkSpeed(speed) {
    const speedLimit = 70;
    const pointsPerDemerit = 5;
    const maxDemeritPoints = 12;
  
    // Validate input
    if (isNaN(speed) || speed < 0) {
      console.log('Invalid input. Speed should be a positive number.');
      return;
    }
  
    // Check for speed violation
    if (speed <= speedLimit) {
      console.log('Ok');
    } else {
      // Calculate demerit points
      let demeritPoints = Math.floor((speed - speedLimit) / pointsPerDemerit);
  
      // Check for license suspension
      if (demeritPoints > maxDemeritPoints) {
        console.log('License suspended');
      } else {
        console.log(`Points: ${demeritPoints}`);
      }
    }
  }
  
  // Change the speed value to test different scenarios
  const carSpeed = 80;
  checkSpeed(carSpeed);
    