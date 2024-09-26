import Datepicker from "./components/Datepicker"
import { useState } from "react"


function App() {
const [selectedDate, setSelectedDate] = useState(null)
  return (
    <>
      <Datepicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat= "ddd/MM/yyyy"
      />
    </>
  )
}

export default App
