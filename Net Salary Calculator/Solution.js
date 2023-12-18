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
    // ... Add more NHIF rates as needed
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
