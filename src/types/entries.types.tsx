export class Entry {
    data: GetEntryResponse;
    constructor(data: GetEntryResponse) {
        this.data = data;
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
        expected_total: any; // TODO: handle curreny
    }
    meta: {
        running_total: number;
    }
}
