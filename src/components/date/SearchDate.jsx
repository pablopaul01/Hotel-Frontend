import React, {useState} from 'react'
import "./searchDate.css"
import {BiCalendar} from "react-icons/bi"
import { DateRange } from 'react-date-range';
import { es } from 'date-fns/locale';
import {format} from "date-fns"

const SearchDate = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [open, setOpen] = useState(false)
  return (
    <div className='container px-5 d-flex justify-content-between py-4 searchBar'>
      <div className="optionsWrap d-flex gap-5 ">
        <div className="searchDate text-center">
          <p className='textDateRange mb-0'>Seleccionar fechas</p>
          <span className='rangePlaceHolder' onClick={()=>setOpen(!open)}>{`${format(date[0].startDate, "dd/MM/yyyy")} hasta ${format(date[0].endDate, "dd/MM/yyyy")}`} <BiCalendar/></span>
          {open &&
            <DateRange
            locale={es}
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="calendar"
            minDate={new Date()}
          />}
        </div>
        <div className="qtyPeople d-flex gap-2">
          <div className="adultsContainer text-center">
            <p className='textDateRange mb-0'>Adultos</p>
            <input type="number" defaultValue={1} className='inputSearchPeople'/>
          </div>
          <div className="adultsContainer text-center">
            <p className='textDateRange mb-0'>Niños</p>
            <input type="number" defaultValue={0} className='inputSearchPeople'/>
          </div>
        </div>
      </div>
      <button className='btn btnSearch'>COMPROBAR DISPONIBILIDAD</button>
    </div>
  )
}

export default SearchDate