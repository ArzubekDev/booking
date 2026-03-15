"use client"
import React, { useState } from 'react'
import scss from "../styles/Booking.module.scss"
import { useSeats } from '../useContext';


const Booking = () => {
    const { left, right, center, back, toggleSeat, confirmBooking, resetSelection } = useSeats();
    
      const [activeRow, setActiveRow] = useState<number | null>(null);
      const allSeats = [...left, ...right, ...center, ...back];
      const selectedSeats = allSeats.filter((seat) => seat.status === 'выбрано');
      const totalAmount = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
      const totalCount = selectedSeats.length;
      const rows = Array.from(new Set(selectedSeats.map((s) => s.row))).join(', ');
      const seatNumbers = selectedSeats.map((s) => s.number).join(', ');
    
  return (
      <div className={scss.booking}>
        <div className={scss.header}>
          <span>Бронь</span>
        </div>

        <div className={scss.content}>
          <div className={scss.item}>
            <span className={scss.label}>Ряд</span>
            <span className={scss.value}>{rows || '-'}</span>
          </div>

          <div className={scss.item}>
            <span className={scss.label}>Место</span>
            <span className={scss.value}>{seatNumbers || '-'}</span>
          </div>

          <div className={scss.item}>
            <span className={scss.label}>Количество</span>
            <span className={scss.value}>{totalCount}</span>
          </div>
        </div>

        <div className={scss.line}></div>

        <div className={scss.total}>
          <span>Общая сумма</span>
          <strong>{totalAmount} сом</strong>
        </div>

       <div className={scss.buttons}>
         <button className={scss.book_button} disabled={totalCount === 0} onClick={confirmBooking}>
          Забронировать
        </button>

        <button className={scss.reset_button} onClick={resetSelection}>
          Сбросить выбор
        </button>
       </div>
      </div>
  )
}

export default Booking