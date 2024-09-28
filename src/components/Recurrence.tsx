import { ComponentsS } from "./Components";


const Recurrence: React.FC = () => {
  const { recurrenceType, setRecurrenceType } = ComponentsS();

  return (
    <div className="space-y-4">
      <label>Recurrence Pattern:</label>
      <select
        value={recurrenceType}
        onChange={(e) => setRecurrenceType(e.target.value as 'daily' | 'weekly' | 'monthly' | 'yearly')}
        className="border p-2 rounded"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default Recurrence;