import React, { useState } from "react";
import Header from "./header/Header";
import ChooseSheet from "./chooseSheet/ChooseSheet";
import './Sheet.sass'

const Sheets: React.FC = () => {
    const expenses : any[] = [];
    const expensesLoading = false;

    const [currentDateValue, setCurrentDateValue] = useState<Date>(new Date());

    const handleDateChange = (newDate: Date) => {
        setCurrentDateValue(newDate);
    };

    return <div className="page">
        <Header
            currentMonth={currentDateValue.getMonth()}
            currentYear={currentDateValue.getFullYear()}
            onDateChange={handleDateChange}
        ></Header>
        <main className={!expensesLoading && !expenses.length ? 'is-centered' : ''}>
            {
                !expensesLoading &&
                !expenses.length &&
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
