import React from 'react'
import Room from './Room'
import { categories } from '../../helpers/data'

const RoomList = ({date,guests}) => {

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

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some (date => {
            const fecha = new Date(date).getTime()
            const result = allDates.includes(fecha)
            return result
        })
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
console.log("guests en roomlist", guests)
    return (
        <div className='container'>
            {
                availableRooms.map((category) => (
                    <Room date={date} category={category} key={category.id} guests={guests} allDates={allDates} categories={categories}/>
                ))
            }
        </div>
    )
}

export default RoomList