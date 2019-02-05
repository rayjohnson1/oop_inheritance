"use strict";

var _BankMember = _interopRequireDefault(require("./BankMember"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//index
var chuck = new _BankMember.default("Chuck");
console.log("\nCreating ".concat(chuck.name, "'s new savings account."));
chuck.createSavingsAccount(3000);
console.log("\nChuck's Savings Balance: $".concat(chuck.getSavingsBalance()));
console.log("\nDepositing funds");
chuck.depositToSavings(150);
console.log("Chuck's Savings Balance: $".concat(chuck.getSavingsBalance(), " \n"));
console.log("Withdrawing funds");
chuck.withdrawFromSavings(1650);
console.log("Chuck's Savings Balance: $".concat(chuck.getSavingsBalance(), " \n"));