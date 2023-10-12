import React, {useState,useEffect} from 'react'
import Room from './Room'
import { axiosInstance } from '../../config/axiosInstance';
// import { categories } from '../../helpers/data'


const RoomList = ({date,guests}) => {
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        const token = localStorage.getItem("token");
        const response = await axiosInstance.get("/categorias", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
    
        setCategories(response.data.categories);
      }

      useEffect(() => {
        getCategories();
      }, [])
    

    const getDateInRange = (startDate, endDate) => {
        const start = new Date (startDate)
        const end = new Date (endDate)
        const fecha = new Date (start.getTime());
        let list = [];
        while (fecha <= end){
            list.push(new Date(fecha).getTime())
            fecha.setDate(fecha.getDate()+1) 
        }
        return list
    }

    const getDateInRangeFormat = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const fecha = new Date(start.getTime());
        let list = [];
        while (fecha <= end){
            list.push(fecha.toISOString());
            fecha.setDate(fecha.getDate() + 1); 
        }
        return list;
    }
    
    const allDatesFormat = getDateInRangeFormat(date[0].startDate, date[0].endDate)
    console.log("allDatesFormat",allDatesFormat)
    const allDates = getDateInRange(date[0].startDate, date[0].endDate)
    // console.log("alldates", allDatesFormat)
    const isAvailable = (roomNumber) => {
       
        const isFound = allDatesFormat.some(date => {
            // console.log("date en iavailable", date)
            // const fecha = new Date(date).getTime()
            // const fecha = new Date(date)
            // console.log("fecha a comparar",fecha.toISOString())
            roomNumber.unavailableDates.includes(date)
            // console.log("coincide?", result)
            // return result
        })
        // return !isFound
        console.log("is Found",isFound)
        
    }

    // const isAvailable = (roomNumber) => {
    //     const isFound = roomNumber.unavailableDates.some(date => {
    //         const fecha = new Date(date);
    //         const fechaTimestamp = fecha.getTime(); // Convierte la fecha a timestamp
    
    //         // También convierte las fechas de allDatesFormat a timestamps antes de comparar
    //         const allDatesTimestamps = allDatesFormat.map(date => (new Date(date)).getTime());
    //         console.log("fechaTimestamp",fechaTimestamp)
    //         console.log("alldatetime",allDatesTimestamps)
    //         const result = allDatesFormat.includes(fechaTimestamp);
    //         console.log("result", result)
    //         return result;
    //     })
    //     return !isFound;
    // }

    const getAvailableRooms = (categories) => {
        // console.log("categories en roomlist", categories)
        return categories.map(category => {
            const availableRoomNumbers = category.roomNumbers.filter(room => isAvailable(room));
            // console.log(availableRoomNumbers)
            return {
                ...category,
                roomNumbers: availableRoomNumbers
            };
        });
    }

    const availableRooms = getAvailableRooms(categories);
    // console.log("availableRooms en roomlist", availableRooms)
    return (
        <div className='container'>
            {
                availableRooms.map((category) => (
                    <Room date={date} category={category} key={category._id} guests={guests} allDates={allDates} categories={categories}/>
                ))
            }
        </div>
    )
}

export default RoomList