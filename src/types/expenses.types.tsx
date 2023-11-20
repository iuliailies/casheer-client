import { Value } from "./common.types";

export class Expense {
    data: GetExpenseResponse;
    constructor(data: GetExpenseResponse) {
        this.data = data;
    }

    get id(): number {
        return this.data.id;
    }

    get name(): number {
        return this.data.attributes.name;
    }

    get description(): number {
        return this.data.attributes.description;
    }

    get value(): Value {
        return this.data.attributes.value;
    }
}

export interface GetExpensesRequest {
}

export interface GetExpensesResponse {
    data: GetExpenseResponse[];
}

export interface GetExpenseResponse {
    id: number;
    type: string;
    attributes: {
        name: number;
        description: number;
        payment_method: string;
        value: Value;
        created_at: Date;
        updated_at: Date;
    }
    meta: {
        running_total: number;
    }
}
