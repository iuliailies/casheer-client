import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon, regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import './Header.sass'

interface HeaderProps {
    currentMonth: number;
    currentYear: number;
    onDateChange: (newDate: Date) => void;
  }

  const Header: React.FC<HeaderProps> = ({
    currentMonth,
    currentYear,
    onDateChange
  }) => {
    const handlePrevMonth = () => {
        const newDate = new Date(currentYear, currentMonth - 1, 1);
        onDateChange(newDate);
      };

      const handleNextMonth = () => {
        const newDate = new Date(currentYear, currentMonth + 1, 1);
        onDateChange(newDate);
      };

    return (
      <header>
        <FontAwesomeIcon
          className="icon"
          onClick={handlePrevMonth}
          icon={icon({ name: 'chevron-left' })}
        />
        <FontAwesomeIcon
          className="icon"
          onClick={handleNextMonth}
          icon={icon({ name: 'chevron-right' })}
        />
        <div className="title">
          {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
          }).format(new Date(currentYear, currentMonth, 1))}
        </div>
        <FontAwesomeIcon className="icon" icon={regular('calendar-plus')} />
      </header>
    );
  };

  export default Header;
