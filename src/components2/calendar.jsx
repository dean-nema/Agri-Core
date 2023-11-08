import  { useState } from 'react';

const Calendar = () => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const [currentDate, setCurrentDate] = useState(new Date());

  const calendarContainerStyle = {
    maxWidth: '50px',
    margin: '0 auto',
   
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    
  };

  const calendarHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '10px',
  };

  const calendarDayStyle = {
    padding: '10px',
    border: '1px solid #ccc',
  };

  const generateCalendar = () => {
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    return (
      <div style={calendarContainerStyle} className="calender-man">
        <div style={calendarHeaderStyle}>
          <button onClick={prevMonth}>&lt;</button>
          <h2>{`${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`}</h2>
          <button onClick={nextMonth}>&gt;</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px' }}>
          {Array.from({ length: 42 }, (_, index) => {
            const day = index - firstDayOfMonth.getDay() + 1;
            return (
              <div style={calendarDayStyle} key={index}>
                {day > 0 && day <= daysInMonth ? day : ''}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return generateCalendar();
};

export default Calendar;