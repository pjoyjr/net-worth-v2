export interface Transaction {
    id?: number;
    isIncome: boolean;
    description: string;
    day: string;
    amount: number;
}