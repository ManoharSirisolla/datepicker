import { ComponentsS } from "./Components";



const DatePick: React.FC = () => {
  const { startDate, updateStartDate,  } = ComponentsS();

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
    </div>
  );
};

export default DatePick;