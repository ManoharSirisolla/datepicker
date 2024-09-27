import React from 'react';
import { ComponentsS } from './Components';

const Calendar: React.FC = () => {
  const { startDate } = ComponentsS();
  const recurringDates = startDate ? [startDate] : [];

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">Recurring Dates Preview</h3>
      <Calendar
        value = {recurringDates || new Date()}
        titleClassName={({date}: {date: Date}) =>
          recurringDates && recurringDates.some((d) => d.toDateString() === date.toDateString()) ? 'highlight' : null
        }
      />
    </div>
  );
};

export default Calendar;