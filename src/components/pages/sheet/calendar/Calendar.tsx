import './Calendar.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useState } from 'react';

interface CalendarProps {
    currentMonth: number;
    currentYear: number;
    onDateChange: (newDate: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({
    currentMonth,
    currentYear,
    onDateChange
}) => {
    const currentDate = new Date();
    const [currentDateValue, setCurrentDateValue] = useState<Date>(new Date(currentYear, 1, 1));

    const months: number[] = Array.from({ length: 12 }, (_, index) => index);

    const handlePrevYear = () => {
        const newDate = new Date(currentDateValue.getFullYear() - 1, 1, 1);
        setCurrentDateValue(newDate);
    };

    const handleNextYear = () => {
        const newDate = new Date(currentDateValue.getFullYear() + 1, 1, 1);
        setCurrentDateValue(newDate);
    };

    const handleDateChange = (month: number) => {
        onDateChange(new Date(currentDateValue.getFullYear(), month, 1));
    }

    return <div>
        <div className="header text">
            <div className={`year subtitle ${currentDateValue.getFullYear() === (new Date()).getFullYear() ? 'active' : ''}`}>{ currentDateValue.getFullYear() }</div>
            <div className="icons">
                <FontAwesomeIcon
                    className="icon"
                    onClick={handlePrevYear}
                    icon={icon({ name: 'chevron-up' })}
                />
                <FontAwesomeIcon
                    className="icon"
                    onClick={handleNextYear}
                    icon={icon({ name: 'chevron-down' })}
                />
            </div>
        </div>
        <div className="grid-container">
            {months.map((month, index) => (
                <div key={index} onClick={() => handleDateChange(month)} className={`grid-item text ${month === currentDate.getMonth() && currentDateValue.getFullYear() === currentDate.getFullYear() ? 'active' : ''}`}>{(new Date(0, month)).toLocaleString('default', { month: 'short' })}</div>
            ))}
        </div>
    </div>
}

export default Calendar;
