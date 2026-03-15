'use client';
import { useState } from 'react';
import scss from '../styles/Seat.module.scss';
import { useSeats } from '../useContext';
import SeatLogo from './SeatLogo';

const Seat = () => {
  const { left, right, center, back, toggleSeat, confirmBooking, resetSelection } = useSeats();

  const [activeRow, setActiveRow] = useState<number | null>(null);
  const allSeats = [...left, ...right, ...center, ...back];
  const selectedSeats = allSeats.filter((seat) => seat.status === 'выбрано');
  const totalAmount = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
  const totalCount = selectedSeats.length;
  const rows = Array.from(new Set(selectedSeats.map((s) => s.row))).join(', ');
  const seatNumbers = selectedSeats.map((s) => s.number).join(', ');

  return (
    <div className={scss.container}>
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

        <button className={scss.book_button} disabled={totalCount === 0} onClick={confirmBooking}>
          Забронировать
        </button>

        <button className={scss.reset_button} onClick={resetSelection}>
          Сбросить выбор
        </button>
      </div>
      <div className={scss.seats}>
        <div className={scss.front}>
          <div className={scss.left}>
            {left.map((seat) => (
              <button
                className={scss.seatLeftItem}
                key={seat.id}
                disabled={seat.status === 'занято'}
                onClick={() => toggleSeat(seat.id)}
                onMouseEnter={() => setActiveRow(seat.row)}
                onMouseLeave={() => setActiveRow(null)}
              >
                <SeatLogo status={seat.status} />
                <p className={scss.info}>
                  ряд: <span>{seat.row}</span>; номер: <span>{seat.number}</span> цена:{' '}
                  <span>{seat.price}</span>
                </p>
              </button>
            ))}
          </div>
          <div className={scss.right}>
            {right.map((seat) => (
              <button
                className={scss.seatRightItem}
                key={seat.id}
                disabled={seat.status === 'занято'}
                onClick={() => toggleSeat(seat.id)}
                onMouseEnter={() => setActiveRow(seat.row)}
                onMouseLeave={() => setActiveRow(null)}
              >
                <SeatLogo status={seat.status} />
                <p className={scss.info}>
                  ряд: <span>{seat.row}</span>; номер: <span>{seat.number}</span> цена:{' '}
                  <span>{seat.price}</span>
                </p>
              </button>
            ))}
          </div>
        </div>
        <div className={scss.center}>
          {center.map((seat) => (
            <button
              className={scss.seatCenterItem}
              key={seat.id}
              disabled={seat.status === 'занято'}
              onClick={() => toggleSeat(seat.id)}
              onMouseEnter={() => setActiveRow(seat.row)}
              onMouseLeave={() => setActiveRow(null)}
            >
              <SeatLogo status={seat.status} />
              <p className={scss.info}>
                ряд: <span>{seat.row}</span>; номер: <span>{seat.number}</span> цена:{' '}
                <span>{seat.price}</span>
              </p>
            </button>
          ))}
        </div>
        <div className={scss.back}>
          {back.map((seat) => (
            <button
              className={scss.seatBackItem}
              key={seat.id}
              disabled={seat.status === 'занято'}
              onClick={() => toggleSeat(seat.id)}
              onMouseEnter={() => setActiveRow(seat.row)}
              onMouseLeave={() => setActiveRow(null)}
            >
              <SeatLogo status={seat.status} />
              <p className={scss.info}>
                ряд: <span>{seat.row}</span>; номер: <span>{seat.number}</span> цена:{' '}
                <span>{seat.price}</span>
              </p>
            </button>
          ))}
        </div>
      </div>
      <div className={scss.numbers}>
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className={`${scss.numberItem} ${activeRow === num ? scss.activeRow : ''}`}
          >
            <span></span>
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seat;
