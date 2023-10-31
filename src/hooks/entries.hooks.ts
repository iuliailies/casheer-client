import { useEffect, useState } from "react";
import { getEntriesPerMonth } from "../api/entries.service";
import { Entry } from "../types/entries.types";

// custom hooks for handlign entry-related API calls

export function useEntries(date: Date) {
    const [entries, setEntries] = useState<Entry[]>([]);
    const [entriesLoading, setEntriesLoading] = useState<boolean>(true);
    
    useEffect(() => {
        setEntriesLoading(true);
        getEntriesPerMonth(date.getMonth() + 1, date.getFullYear())
            .then((result) => {
                setEntries(result);
                setEntriesLoading(false);
            })
            .catch((error) => {
                // TODO: error handling
                setEntriesLoading(false);
            });
    }, [date]);

    return { entries, entriesLoading };
}