import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon, regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import './Header.sass'
import Calendar from '../calendar/Calendar';

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
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<SVGSVGElement | null>(null); // refferences the icon that triggers the dropdown

  const handlePrevMonth = () => {
      const newDate = new Date(currentYear, currentMonth - 1, 1);
      onDateChange(newDate);
    };

  const handleNextMonth = () => {
    const newDate = new Date(currentYear, currentMonth + 1, 1);
    onDateChange(newDate);
  };

  const handleToggleDropdown = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.stopPropagation();
    setDropdownOpen(prevIsDropdownOpen => !prevIsDropdownOpen);
  }

  const handleDateChange = (newDate: Date) => {
    onDateChange(newDate);
    setDropdownOpen(false);
  };

  useEffect(() => {
      // handles clicks outside of the dropdown
      const handleClickOutside = (event: MouseEvent) => {
          if (
              isDropdownOpen &&
              dropdownRef.current &&
              !dropdownRef.current.contains(event.target as Node) &&
              iconRef.current &&
              !iconRef.current.contains(event.target as Node)
          ) {
            setDropdownOpen(false);
          }
        };

      document.addEventListener('click', handleClickOutside);

      // clean up the event listener when the component unmounts
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [isDropdownOpen]); // empty dependency array ensures this effect runs only once


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
      <div className="dropdown-wrapper">
          <FontAwesomeIcon className={`icon primary ${isDropdownOpen ? 'active' : ''}`} onClick={handleToggleDropdown} ref={iconRef} icon={regular('calendar-plus')} />
          {isDropdownOpen && (
              <div className="dropdown" ref={dropdownRef}>
                <Calendar currentMonth={currentMonth} currentYear={currentYear} onDateChange={handleDateChange}></Calendar>
              </div>
          )}
      </div>
    </header>
  );
};

export default Header;
