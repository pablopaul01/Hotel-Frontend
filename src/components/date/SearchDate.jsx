import React, {useState, useEffect,useRef} from 'react'
import "./searchDate.css"
import {BiCalendar} from "react-icons/bi"
import { DateRange } from 'react-date-range';
import { es } from 'date-fns/locale';
import {format} from "date-fns"

const SearchDate = ({date,setDate,setIsFilter, isFilter, guests, setGuests}) => {

  const [open, setOpen] = useState(false)

  const searchDateRef = useRef(null);
  const handleClick = () => {
    setIsFilter(isFilter = true)
    setOpen(!open)
  }

  const handlechange = (e)=>{
   
    setGuests({...guests,[e.target.name]: e.target.value})
  }

  const handleSelect = (ranges) => {
    // setDate([ranges.selection]);
    setShowDateRange(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchDateRef.current && !searchDateRef.current.contains(event.target) && open) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);
  return (
    <div className='container px-5 d-flex justify-content-between py-4 searchBar flex-column flex-md-row gap-2 gap-lg-0 mb-3' >
      <div className="optionsWrap d-flex gap-2 gap-lg-5 flex-column flex-md-row">
        <div className="searchDate text-center" ref={searchDateRef}>
          <p className='textDateRange mb-0' >Seleccionar fechas</p>
          <span  className='rangePlaceHolder'  onClick={()=>{
            setOpen(!open)
            }}>
              {`${format(date[0].startDate, "dd/MM/yyyy")} hasta ${format(date[0].endDate, "dd/MM/yyyy")}`} <BiCalendar/>
          </span>
          {open && 
                <div className="calendar d-flex flex-column ">
                  <DateRange
                    locale={es}
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                  />
                  <span className='closeCalendarBtn'  onClick={()=>setOpen(!open)}>CERRAR X</span>
                </div>
            }
        </div>
        <div className="qtyPeople d-flex gap-2 justify-content-center">
          <div className="adultsContainer text-center">
            <p className='textDateRange mb-0' name="adults">Adultos</p>
            <input type="number" name="adults" defaultValue={1} className='inputSearchPeople' onChange={handlechange}/>
          </div>
          <div className="adultsContainer text-center">
            <p className='textDateRange mb-0'>Niños</p>
            <input type="number" name='kids' defaultValue={0} className='inputSearchPeople' onChange={handlechange}/>
          </div>
        </div>
      </div>
      <button className='btn btnSearch' onClick={handleClick} >COMPROBAR DISPONIBILIDAD</button>
    </div>    
  )
}

export default SearchDate