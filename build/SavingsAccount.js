"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//SavingsAccount.ts
var SavingsAccount =
/*#__PURE__*/
function () {
  _createClass(SavingsAccount, [{
    key: "memberId",
    get: function get() {
      return this._memberId;
    }
  }, {
    key: "balance",
    get: function get() {
      return this._balance;
    }
  }]);

  function SavingsAccount(memberId, startingBalance) {
    _classCallCheck(this, SavingsAccount);

    this._memberId = memberId;
    this._balance = startingBalance;
    this._percentInterestGrowth = 2;
    this._maxMonthlyWithdrawals = 3;
    this._currentMonthlyWithdrawls = 0;
  }

  _createClass(SavingsAccount, [{
    key: "deposit",
    value: function deposit(amount) {
      this._balance += amount;
    }
  }, {
    key: "addMonthlyInterestGrowth",
    value: function addMonthlyInterestGrowth() {
      this._balance += this._balance * (this._percentInterestGrowth / 100);
    }
  }, {
    key: "withdraw",
    value: function withdraw(amount) {
      if (this._currentMonthlyWithdrawls === this._maxMonthlyWithdrawals) {
        console.log("Max monthly withdrawal limit has been reached, Please wait until next month.");
        return;
      }

      if (amount > this._balance) {
        console.log("Insufficient funds!");
        return;
      }

      this._balance -= amount;
      this._currentMonthlyWithdrawls++;
    }
  }]);

  return SavingsAccount;
}();

exports.default = SavingsAccount;