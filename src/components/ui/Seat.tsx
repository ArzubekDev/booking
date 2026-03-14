"use client"
import { useState } from 'react';
import scss from "../styles/Seat.module.scss";
import { useSeats } from '../useContext';
import SeatLogo from './SeatLogo';


const Seat = () => {
  const { left, right, center, back, toggleSeat } = useSeats();

  return (
    <div className={scss.container}>
<div className={scss.booking}>
  <div className={scss.header}>
    <span>Бронь</span>
  </div>

  <div className={scss.content}>
    <div className={scss.item}>
      <span className={scss.label}>Ряд</span>
      <span className={scss.value}>5</span>
    </div>

    <div className={scss.item}>
      <span className={scss.label}>Место</span>
      <span className={scss.value}>12</span>
    </div>

    <div className={scss.item}>
      <span className={scss.label}>Количество</span>
      <span className={scss.value}>2</span>
    </div>
  </div>
  <div className={scss.line}></div>
  <div className={scss.total}>
    <span>Общая сумма</span>
    <strong>600 сом</strong>
  </div>

  <button className={scss.button}>
    Купить билет
  </button>
</div>
     <div className={scss.seats}>
       <div className={scss.front}>
        <div className={scss.left}>
         {left.map((seat) => (
          <button  disabled={seat.status === 'занято'} key={seat.id} className={scss.seatLeftItem} onClick={() => toggleSeat(seat.id)}>
            <SeatLogo status={seat.status} />
            <p className={scss.info}>ряд: <span>{seat.row}</span>; номер: <span>{seat.number}</span> цена: <span>{seat.price}</span></p>
          </button>
        ))}
        </div>
        <div className={scss.right}>
         {right.map((seat) => (
          <button  disabled={seat.status === 'занято'} key={seat.id} className={scss.seatRightItem} onClick={() => toggleSeat(seat.id)}>
            <SeatLogo status={seat.status} />
            <p className={scss.info}>ряд: <span>{seat.row}</span>; номер: <span>{seat.number}</span> цена: <span>{seat.price}</span></p>
          </button>
        ))}
        </div>
      </div>
      <div className={scss.center}>
        {center.map((seat) => (
          <button  disabled={seat.status === 'занято'} key={seat.id} className={scss.seatCenterItem} onClick={() => toggleSeat(seat.id)}>
            <SeatLogo status={seat.status} />
            <p className={scss.info}>ряд: <span>{seat.row}</span>; номер: <span>{seat.number}</span> цена: <span>{seat.price}</span></p>
          </button>
        ))}
      </div>
      <div className={scss.back}>
        {back.map((seat) => (
          <button key={seat.id} className={scss.seatBackItem} onClick={() => toggleSeat(seat.id)}>
            <SeatLogo status={seat.status} />
            <p className={scss.info}>ряд: <span>{seat.row}</span>; номер: <span>{seat.number}</span> цена: <span>{seat.price}</span></p>
          </button>
        ))}
      </div>
     </div>
    </div>
  )
}

export default Seat;