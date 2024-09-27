import React from 'react'
import DatePicker from 'react-datepicker'
import { ComponentsS } from './Components'

const DatePick: React.FC = () => {
    const { startDate, setStartDate } = ComponentsS();
  return (
    <div className='p-4 max-w-sm mx-auto'>
      <div>
        <label>Select Date:</label>
        <DatePicker 
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className='"border border-gray-300 p-2 rounded-lg'
        />
      </div>
    </div>
  )
}

export default DatePick
