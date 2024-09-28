import { ComponentsS } from "./Components";



const DatePreview: React.FC = () => {
  const { startDate, recurrenceType, frequency } = ComponentsS();

  const getRecurringDates = (): Date[] => {
    const dates = [];
    if (!startDate) return dates;

    const currentDate = new Date(startDate);
    while (dates.length < 10) {
      dates.push(new Date(currentDate));
      if (recurrenceType === 'daily') {
        currentDate.setDate(currentDate.getDate() + frequency);
      } else if (recurrenceType === 'weekly') {
        currentDate.setDate(currentDate.getDate() + frequency * 7);
      } else if (recurrenceType === 'monthly') {
        currentDate.setMonth(currentDate.getMonth() + frequency);
      } else if (recurrenceType === 'yearly') {
        currentDate.setFullYear(currentDate.getFullYear() + frequency);
      }
    }
    return dates;
  };

  return (
    <div className="mt-4">
      <h3>Selected Recurring Dates:</h3>
      <div className="grid grid-cols-7 gap-2">
        {getRecurringDates().map((date, index) => (
          <div key={index} className="p-2 border rounded">
            {date.toLocaleDateString()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatePreview;