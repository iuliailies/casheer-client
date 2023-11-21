import { Value } from "./common.types";
import { Expense } from "./expenses.types";

export class Entry {
    data: GetEntryResponse;
    expenses: Expense[] | null = [];

    constructor(data: GetEntryResponse) {
        this.data = data;
    }

    get id(): number {
        return this.data.id;
    }

    get month(): number {
        return this.data.attributes.month;
    }

    get year(): number {
        return this.data.attributes.year;
    }

    get category(): string {
        return this.data.attributes.category;
    }

    get subcategory(): string {
        return this.data.attributes.subcategory;
    }

    get expected(): Value {
        return this.data.attributes.expected_total;
    }

    addExpense(expense: Expense) : void {
        if(!this.expenses) {
            return;
        }
        this.expenses.push(expense);
    }
}

export interface CategorizedEntries {
    [category: string]: Entry[];
}

export interface GetEntriesRequest {
}

export interface GetEntriesResponse {
    data: GetEntryResponse[];
}

export interface GetEntryResponse {
    id: number;
    type: string;
    attributes: {
        month: number;
        year: number;
        category: string;
        subcategory: string;
        expected_total: Value;
    }
}
