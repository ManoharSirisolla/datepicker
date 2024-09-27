import React from "react"
import { ComponentsS } from "./Components"


const Recurrence: React.FC = () => {
    const { frequency, setFrequency } = ComponentsS();
  return (
    <div className="p-4">
      <label>Recurrence</label>
      <select
        value={frequency}
        onChange={(e) => setFrequency(e.target.value as 'Daily' | 'Weekly' | 'Monthly' | 'Yearly')}
        className="border border-gray-300 p-2 rounded-lg"
      >
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>
    </div>
  )
}

export default Recurrence
