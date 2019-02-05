//index
import BankMember from './BankMember';

const chuck = new BankMember(`Chuck`);

console.log(`\nCreating ${chuck.name}'s new savings account.`);
chuck.createSavingsAccount(3000);

console.log(`\nChuck's starting savings balance: $${chuck.getSavingsBalance()}`);

console.log("\nDepositing funds");
chuck.depositToSavings(150);
console.log(`Chuck's savings balance: $${chuck.getSavingsBalance()} \n`);

console.log("Withdrawing funds");
chuck.withdrawFromSavings(1650);
console.log(`Chuck's savings balance: $${chuck.getSavingsBalance()} \n`);