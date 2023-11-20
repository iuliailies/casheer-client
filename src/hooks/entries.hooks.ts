import { useEffect, useState } from "react";
import { getEntriesPerMonth } from "../api/entries.service";
import { Entry } from "../types/entries.types";
import { Expense } from "../types/expenses.types";
import { getExpensesPerEntry } from "../api/expenses.service";

// custom hooks for handling entry-related API calls

export function useEntries(date: Date) {
    const [entries, setEntries] = useState<Entry[]>([]);
    const [entriesLoading, setEntriesLoading] = useState<boolean>(true);
    const [expenses, setExpenses] = useState<(Expense[] | null)[]>([]); 
    const [expensesLoading, setExpensesLoading] = useState<boolean>(true);
    
    useEffect(() => {
        // Function to fetch expenses for a single entry
        const fetchExpenses = async (entryId: number) => {
            try {
                const expenses = await getExpensesPerEntry(entryId);
                return expenses;
            } catch (error) {
                console.error(`Error fetching expenses for entry ${entryId}:`, error);
                return null;
            }
        };

        setEntriesLoading(true);
        getEntriesPerMonth(date.getMonth() + 1, date.getFullYear())
        .then((result) => {
            setEntries(result);
            setEntriesLoading(false);

            Promise.all(result.map((entry) => entry.id).map(fetchExpenses))
            .then((expenseResults) => {
                setExpenses(expenseResults);
                setExpensesLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching expenses:', error);
                setExpensesLoading(false);
            });
        })
        .catch((error) => {
            // TODO: error handling for entry retrieval
            console.error('Error fetching entries:', error);
            setEntriesLoading(false);
        });
    }, [date]);

    return { entries, entriesLoading, expenses, expensesLoading };
}