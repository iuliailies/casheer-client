import React, { useState, useEffect } from "react";
import Header from "./header/Header";
import ChooseSheet from "./chooseSheet/ChooseSheet";
import './Sheet.sass'
import { getEntriesPerMonth } from "../../../api/entries.service";
import { Entry } from "../../../types/entries.types";

const Sheets: React.FC = () => {
    const [currentDateValue, setCurrentDateValue] = useState<Date>(new Date());
    const [entries, setEntries] = useState<Entry[]>([]);
    const [entriesLoading, setEntriesLoading] = useState<boolean>(true);

    useEffect(() => {
        setEntriesLoading(true);
        getEntriesPerMonth(currentDateValue.getMonth() + 1, currentDateValue.getFullYear()).then((result) => {
            setEntries(result);
            setEntriesLoading(false);
        })
        .catch((error) => {
            // TODO: error handling
            setEntriesLoading(false);
        })
    }, [currentDateValue])

    const handleDateChange = (newDate: Date) => {
        setCurrentDateValue(newDate);
    };

    return <div className="page">
        <Header
            currentMonth={currentDateValue.getMonth()}
            currentYear={currentDateValue.getFullYear()}
            onDateChange={handleDateChange}
        ></Header>
        <main className={!entriesLoading && !entries.length ? 'is-centered' : ''}>
            {
                !entriesLoading &&
                !entries.length &&
                <div className="create-wrapper">
                    <img src="/assets/circle_pattern.svg" className='pattern' alt="" />
                    <ChooseSheet
                    currentMonth={currentDateValue.getMonth()}
                    currentYear={currentDateValue.getFullYear()}
                    ></ChooseSheet>
                </div>
            }
        </main>
    </div>
};

export default Sheets;
