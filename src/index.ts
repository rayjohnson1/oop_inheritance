//index
import BankMember from './BankMember';

const chuck = new BankMember(`Chuck`);

console.log(`\nCreating ${chuck.name}'s new savings account.`);
chuck.createSavingsAccount(150);

console.log(`\nChuck's starting savings balance: $${chuck.getSavingsBalance()}`);

console.log(`\nCreating ${chuck.name}'s new checking account.`);
chuck.createCheckingAccount(500);

console.log(`\nChuck's starting checking balance: $${chuck.getCheckingBalance()}`);

console.log("\nDepositing funds");
chuck.depositToSavings(150);
console.log(`Chuck's savings balance: $${chuck.getSavingsBalance()} \n`);

console.log("Withdrawing funds");
chuck.withdrawFromSavings(6);
console.log(`Chuck's savings balance: $${chuck.getSavingsBalance()} \n`);
chuck.withdrawFromSavings(124);
console.log(`Chuck's savings balance: $${chuck.getSavingsBalance()} \n`);
chuck.withdrawFromSavings(89);
console.log(`Chuck's savings balance: $${chuck.getSavingsBalance()} \n`);
chuck.withdrawFromSavings(24);
console.log(`Chuck's savings balance: $${chuck.getSavingsBalance()} \n`);

chuck.withdrawFromChecking(600)