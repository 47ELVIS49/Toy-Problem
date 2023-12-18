const readline = require('readline');

// Create an interface to read input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to calculate Net Salary
function calculateNetSalary(basicSalary, benefits) {
  // Constants and rates
  const payeRates = [
    { min: 0, max: 24000, rate: 0.1 },
    { min: 24001, max: 32333, rate: 0.25 },
    { min: 32334, max: 500000, rate: 0.3 },
    { min: 500001, max: 800000, rate: 0.325 },
    { min: 800001, max: Infinity, rate: 0.35 }
  ];

  const nhifRates = [
    { min: 0, max: 5999, deduction: 150 },
    { min: 6000, max: 7999, deduction: 300 },
    { min: 8000, max: 11999, deduction: 400 },
    { min: 12000, max: 14999, deduction: 500 },
    { min: 15000, max: 19999, deduction: 600 },
    { min: 20000, max: 24999, deduction: 750 },
    { min: 25000, max: 29999, deduction: 850 },
    { min: 30000, max: 34999, deduction: 900 },
    { min: 35000, max: 39999, deduction: 950 },
    { min: 40000, max: 44999, deduction: 1000 },
    { min: 45000, max: 49999, deduction: 1100 },
    { min: 50000, max: 59999, deduction: 1200 },
    { min: 60000, max: 69999, deduction: 1300 },
    { min: 70000, max: 79999, deduction: 1400 },
    { min: 80000, max: 89999, deduction: 1500 },
    { min: 90000, max: 99999, deduction: 1600 },
    { min: 100000, max: Infinity, deduction: 1700 }
  ];

  const nssfEmployeeRate = 0.06;
  const nssfEmployerRate = 0.06;

  // Calculate PAYE
  let taxableIncome = basicSalary + benefits;
  let paye = 0;

  for (const rate of payeRates) {
    if (taxableIncome > rate.min && taxableIncome <= rate.max) {
      paye = rate.rate * (taxableIncome - rate.min);
      break;
    }
  }

  // Calculate NHIF Deduction
  let nhifDeduction = 0;

  for (const rate of nhifRates) {
    if (taxableIncome > rate.min && taxableIncome <= rate.max) {
      nhifDeduction = rate.deduction;
      break;
    }
  }

  // Calculate NSSF Deductions
  let nssfEmployeeDeduction = taxableIncome * nssfEmployeeRate;
  let nssfEmployerContribution = taxableIncome * nssfEmployerRate;

  // Calculate Gross Salary and Net Salary
  let grossSalary = basicSalary + benefits;
  let netSalary = grossSalary - paye - nhifDeduction - nssfEmployeeDeduction;

  // Display the results
  console.log(`Gross Salary: ${grossSalary}`);
  console.log(`PAYE (Tax): ${paye}`);
  console.log(`NHIF Deduction: ${nhifDeduction}`);
  console.log(`NSSF Employee Deduction: ${nssfEmployeeDeduction}`);
  console.log(`NSSF Employer Contribution: ${nssfEmployerContribution}`);
  console.log(`Net Salary: ${netSalary}`);
}

// Prompt user for input
rl.question('Enter Basic Salary: ', (basicSalaryInput) => {
  const basicSalary = parseFloat(basicSalaryInput);

  rl.question('Enter Benefits: ', (benefitsInput) => {
    const benefits = parseFloat(benefitsInput);

    // Call the function to calculate Net Salary
    calculateNetSalary(basicSalary, benefits);

    // Close the interface
    rl.close();
  });
});

  