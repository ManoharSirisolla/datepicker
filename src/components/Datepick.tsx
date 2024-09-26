import { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const DatePick: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateChange = (date: Date | null) => {
      setSelectedDate(date);
    };

    return(
      <div className="flex flex-col items-center p-4">
        <h2 className="text-lg font-semibold  mb-2">Select Date:</h2>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          className="px-4 py-2 border rounde-lg shadow-sm focus:ring focus:ring-indigo-500"
        />
        {selectedDate && (
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Selected Date: {selectedDate.toDateString()}</span>
              </p>
          </div>
        )}
      </div>
    );
};

export default DatePick