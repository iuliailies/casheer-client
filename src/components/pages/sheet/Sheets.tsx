import React, { useState, useEffect } from "react";
import Header from "./header/Header";
import ChooseSheet from "./chooseSheet/ChooseSheet";
import './Sheet.sass'
import EntriesTable from "./entries/entriesTable/EntriesTable";
import { useEntries } from "../../../hooks/entries.hooks";

const Sheets: React.FC = () => {
    const [currentDateValue, setCurrentDateValue] = useState<Date>(new Date());

    const { entries, entriesLoading } = useEntries(currentDateValue);

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
            {
                !entriesLoading &&
                entries.length &&
                <EntriesTable entries={entries}></EntriesTable>
            }
        </main>
    </div>
};

export default Sheets;
