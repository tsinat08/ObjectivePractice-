import { getcadre, calculateTax, getBenefits, calculateBonus, reimbursementEligibility} from './employee';
import Employee from './employee';
function getEmployeeInformation(Salary) {
    Employee.salary = Salary;
    console.log('Cadre: ' + cadre());
    console.log('Tax: ' + tax());
    console.log('Benefits: ' + benefits());
    console.log('Bonus: ' + bonus());
    console.log('Reimbursement Eligibility: ' + reimbursement() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);