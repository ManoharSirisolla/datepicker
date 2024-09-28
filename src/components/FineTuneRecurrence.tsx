import { ComponentsS } from "./Components";



const FineTuneRecurrence: React.FC = () => {
  const { recurrenceType, frequency, setFrequency, daysOfWeek, setDaysOfWeek, nthDayOfMonth, setNthDayOfMonth } = ComponentsS();

  const handleDayChange = (day: number) => {
    if (daysOfWeek.includes(day)) {
      setDaysOfWeek(daysOfWeek.filter(d => d !== day));
    } else {
      setDaysOfWeek([...daysOfWeek, day]);
    }
  };

  return (
    <div className="space-y-4">
      <label>Recurrence Frequency: Every</label>
      <input
        type="number"
        value={frequency}
        onChange={(e) => setFrequency(Number(e.target.value))}
        className="border p-2 rounded w-16"
        min="1"
      />
      <span>{recurrenceType}</span>

      {recurrenceType === 'weekly' && (
        <div className="space-y-4">
          <label>Select Days of the Week:</label>
          <div className="flex space-x-2">
            {[0, 1, 2, 3, 4, 5, 6].map(day => (
              <button
                key={day}
                className={`p-2 ${daysOfWeek.includes(day) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => handleDayChange(day)}
              >
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day]}
              </button>
            ))}
          </div>
        </div>
      )}

      {recurrenceType === 'monthly' && (
        <div className="space-y-4">
          <label>Select Nth Day of Month:</label>
          <input
            type="number"
            value={nthDayOfMonth}
            onChange={(e) => setNthDayOfMonth(Number(e.target.value))}
            className="border p-2 rounded w-16"
            min="1"
            max="31"
          />
        </div>
      )}
    </div>
  );
};

export default FineTuneRecurrence;