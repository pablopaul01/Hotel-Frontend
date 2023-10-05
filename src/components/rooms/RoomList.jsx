import React from 'react'
import Room from './Room'
import { categories } from '../../helpers/data'



const RoomList = ({date}) => {

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
    const allDates = getDateInRange(date[0].startDate, date[0].endDate)
    console.log("all dates", allDates)

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some (date => {
            const fecha = new Date(date).getTime()
            console.log("que hay en date", allDates)
            console.log("que hay en fecha", fecha)
    
            const result = allDates.includes(fecha)
            console.log("result", result)
            return result
        })
        console.log(`Habitacion ${roomNumber.number}`, isFound )
        return !isFound
    }

    const getAvailableRooms = (categories) => {
        return categories.map(category => {
            const availableRoomNumbers = category.roomNumbers.filter(room => isAvailable(room));
    
            return {
                ...category,
                roomNumbers: availableRoomNumbers
            };
        });
    }

    const availableRooms = getAvailableRooms(categories);

    return (
        <div className='container'>
            {
                availableRooms.map((category) => (
                    <Room date={date} category={category} key={category.id} />
                ))
            }
        </div>
    )
}

export default RoomList