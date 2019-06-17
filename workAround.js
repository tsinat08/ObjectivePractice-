const {getCadre, calculateTax, getBenefits, calculateBonus, reimbursementEligibility} = require ('./employee');

const Employee =require('./employee');
function getEmployeeInformation(Salary) {
    Employee.salary = Salary;
    console.log('Cadre: ' + getCadre());
    console.log('Tax: ' + calculateTax());
    console.log('Benefits: ' + getBenefits());
    console.log('Bonus: ' + calculateBonus());
    console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);