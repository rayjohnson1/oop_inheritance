//CheckingAccount.ts
export default class CheckingAccount{

    private _memberId: number;
    private _balance: number;
    private _maxWithdrawalAmount: number;

    public get memberId() : number {
        return this._memberId;
    }
    
    public get balance() : number {
        return this._balance;
    }

    constructor(memberId: number, startingBalance: number){
        this._memberId = memberId;
        this._balance = startingBalance;
        this._maxWithdrawalAmount = 250;
    }

    public deposit(amount: number): void{
        this._balance += amount;
    }

    public withdraw(amount: number): void{
        
        if(amount > this._maxWithdrawalAmount){
            console.log(`You can not withdraw more than ${this._maxWithdrawalAmount} at a time!`);
            return;
        }
        if(amount > this._balance){
            console.log("Insufficient Funds!");
            return;
        }

        this._balance -= amount;
        
    }
}