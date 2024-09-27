import React from 'react'
import { ComponentsS } from './Components'

const Options: React.FC = () => {
    const { frequency, interval, setInterval, daysOfWeek, setDaysOfWeek } = ComponentsS();

    const handleDayToggle = (day: number) => {
        if (daysOfWeek.includes(day)) {
            setDaysOfWeek(daysOfWeek.filter((d) => d !== day));
        } else {
            setDaysOfWeek([...daysOfWeek, day]);
        }
    };

  return (
    <div className='p-4'>
        <label>Interval</label>
        <input
            type='number'
            value={interval}
            onChange={(e) => setInterval(parseInt(e.target.value))}
            className='border border-gray-300 p-2 rounded-lg w-20'
        />
        <span className="ml-2">Every {interval} {frequency.toLowerCase()}(s)</span>

        {frequency === 'Weekly' && (
         <div className="mt-4">
            <label>Select Days of the Week</label>
            <div className="grid grid-cols-7 gap-2 mt-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                    <button
                        key={index}
                        className={`p-2 rounded-lg ${daysOfWeek.includes(index) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => handleDayToggle(index)}
                    >
                        {day}
                    </button>
                    ))}
                </div>  
         </div>
        )}
    </div>
  );
};

export default Options;
