//SavingsAccount.ts
export default class SavingsAccount{

    protected _memberId: number;
    protected _balance: number;

    private _percentInterestGrowth: number;
    private _maxMonthlyWithdrawals: number;
    private _currentMonthlyWithdrawls: number;

    public get memberId() : number {
        return this._memberId;
    }
    
    public get balance() : number {
        return this._balance;
    }

    constructor(memberId: number, startingBalance: number){
        this._memberId = memberId;
        this._balance = startingBalance;
        this._percentInterestGrowth = 2;
        this._maxMonthlyWithdrawals = 3;
        this._currentMonthlyWithdrawls = 0;
    }

    public deposit(amount: number): void{
        this._balance += amount;
    }
    
    public addMonthlyInterestGrowth(): void{
        this._balance += (this._balance * (this._percentInterestGrowth / 100));
    }

    public withdraw(amount: number): void{

        if(this._currentMonthlyWithdrawls === this._maxMonthlyWithdrawals){
            console.log(`Max monthly withdrawal limit has been reached, Please wait until next month.`);
            return;
        }

        if(amount > this._balance){
            console.log(`Insufficient funds!`);
            return;
        }

        this._balance -= amount;
        this._currentMonthlyWithdrawls++;

    }

}