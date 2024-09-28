import DatePick from "./DatePick";
import DatePreview from "./DatePreview";
import FineTuneRecurrence from "./FineTuneRecurrence";
import Recurrence from "./Recurrence";


const RecurrenceDatePicker: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <DatePick />
      <Recurrence />
      <FineTuneRecurrence />
      <DatePreview />
    </div>
  );
};

export default RecurrenceDatePicker;