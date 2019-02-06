"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//CheckingAccount.ts
var CheckingAccount =
/*#__PURE__*/
function () {
  _createClass(CheckingAccount, [{
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

  function CheckingAccount(memberId, startingBalance) {
    _classCallCheck(this, CheckingAccount);

    this._memberId = memberId;
    this._balance = startingBalance;
    this._maxWithdrawalAmount = 250;
  }

  _createClass(CheckingAccount, [{
    key: "deposit",
    value: function deposit(amount) {
      this._balance += amount;
    }
  }, {
    key: "withdraw",
    value: function withdraw(amount) {
      if (amount > this._maxWithdrawalAmount) {
        console.log("You can not withdraw more than ".concat(this._maxWithdrawalAmount, " at a time!"));
        return;
      }

      if (amount > this._balance) {
        console.log("Insufficient Funds!");
        return;
      }

      this._balance -= amount;
    }
  }]);

  return CheckingAccount;
}();

exports.default = CheckingAccount;