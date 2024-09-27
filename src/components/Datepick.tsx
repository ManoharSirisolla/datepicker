import { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const DatePick: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateChange = (date: Date | null) => {
      setSelectedDate(date);
    };

    return(
      <div className="flex flex-col items-center p-6">
        <h2 className="text-lg font-bold  mb-4">Select Date:</h2>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          className="px-6 py-4 border"
        />
        {selectedDate && (
          <div className="mt-3">
            <p className="text-sm text-black-600">
              <span className="font-bold">Selected Date: {selectedDate.toDateString()}</span>
              </p>
          </div>
        )}
      </div>
    );
};

export default DatePick