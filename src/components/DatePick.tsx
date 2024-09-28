import { ComponentsS } from "./Components";



const DatePick: React.FC = () => {
  const { startDate, endDate, updateStartDate, updateEndDate } = ComponentsS();

  return (
    <div className="space-y-4">
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate ? startDate.toISOString().split('T')[0] : ''}
          onChange={(e) => updateStartDate(new Date(e.target.value))}
          className="border p-2 rounded"
        />
      </div>

      <div>
        <label>End Date (Optional):</label>
        <input
          type="date"
          value={endDate ? endDate.toISOString().split('T')[0] : ''}
          onChange={(e) => updateEndDate(new Date(e.target.value))}
          className="border p-2 rounded"
        />
      </div>
    </div>
  );
};

export default DatePick;