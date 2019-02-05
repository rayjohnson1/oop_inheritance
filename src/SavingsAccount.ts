export default class SavingsAccount {

    private _memberId : number;
    private _balance : number;

    public get memberId() : number {
        return this._memberId;
    }
    
    public get balance() : number {
        return this._balance;
    }

    constructor(memberId: number, startingBalance: number){
        this._memberId = memberId;
        this._balance = startingBalance;
    }

    public deposit(amount: number): void{
        this._balance += amount;
    }
    
    public withdraw(amount: number): void{
        if(amount > this._balance){
            console.log("Insufficient Funds!");
            return;
        }

        this._balance -= amount;
    }

}