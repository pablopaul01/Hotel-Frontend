import React, { useState, useEffect } from "react";
import Room from "./Room";
import { axiosInstance } from "../../config/axiosInstance";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RoomList = ({ date, guests, isFilter }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setloading] = useState(false)

  const getCategories = async () => {
    const token = localStorage.getItem("token");
    try {
      setloading(true)
      const response = await axiosInstance.get("/categorias", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      setCategories(response.data.categories);
      setloading (false)
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `Ocurrió un problema! Error${error.response.data.status}`,
        text: `${error.response.data.mensaje}`
      })
    }

  };

  useEffect(() => {
    getCategories();
  }, []);

  const getDateInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const fecha = new Date(start.getTime());
    let list = [];
    while (fecha <= end) {
      list.push(new Date(fecha).getTime());
      fecha.setDate(fecha.getDate() + 1);
    }
    return list;
  };

  const getDateInRangeFormat = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const fecha = new Date(start.getTime());
    let list = [];
    while (fecha <= end) {
      list.push(fecha.toISOString());
      fecha.setDate(fecha.getDate() + 1);
    }
    return list;
  };

  const allDatesFormat = getDateInRangeFormat(
    date[0].startDate,
    date[0].endDate
  );
  const allDates = getDateInRange(date[0].startDate, date[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date, idx) => {
      const result = allDatesFormat.includes(date);
      return result;
    });
    return !isFound;
  };

  const getAvailableRooms = (categories) => {
    return categories.map((category) => {
      const availableRoomNumbers = category.roomNumbers.filter((room) =>
        isAvailable(room)
      );

      return {
        ...category,
        roomNumbers: availableRoomNumbers,
      };
    });
  };

  const availableRooms = getAvailableRooms(categories);
  return (
<>
    {loading ? 
    (
      <Skeleton count={10} height={40}/>
    )
  :
  (
    <div className="container">
      {
        availableRooms.map((category) => (
          <Room
            date={date}
            category={category}
            key={category._id}
            guests={guests}
            allDates={allDates}
            categories={categories}
            isFilter={isFilter}
          />
        ))
      }
    </div>

  )}
</>
  );
};

export default RoomList;
