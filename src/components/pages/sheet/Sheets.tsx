import React, { useState } from "react";
import Header from "./header/Header";

const Sheets: React.FC = () => {
    const expenses : any[] = [];

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
        <main></main>
    </div>
};

export default Sheets;
