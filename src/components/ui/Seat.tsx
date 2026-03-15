'use client';
import { useState } from 'react';
import scss from '../styles/Seat.module.scss';
import { useSeats } from '../useContext';
import SeatLogo from './SeatLogo';

const Seat = () => {
  const { left, right, center, back, toggleSeat, } = useSeats();
  const [activeRow, setActiveRow] = useState<number | null>(null);
   const allSeats = [...left, ...right, ...center, ...back];
   const allBooked = allSeats.every(seat => seat.status === 'занято');


  return (
    <div className={scss.container}>
    
      <div className={scss.seats}>
         {
            allBooked && <p className={scss.message}>Все места заняты. Пожалуйста, выберите другой сеанс.</p>
          }
        <div className={scss.front}>
          <div className={scss.left}>
            {left.map((seat) => (
              <button
                className={`${scss.seatLeftItem} ${seat.status === 'занято' ? scss.disabled : ''}`}
                key={seat.id}
                disabled={seat.status === 'занято'}
                onClick={() => toggleSeat(seat.id)}
                onMouseEnter={() => setActiveRow(seat.row)}
                onMouseLeave={() => setActiveRow(null)}
              >
                <SeatLogo status={seat.status} />
                {
                  seat.status !== 'занято' ? (
                    <p className={scss.info}>
                  ряд: <span>{seat.row}</span>; номер: <span>{seat.number}</span> цена:{' '}
                  <span>{seat.price}</span>
                </p>
                  ) : <p className={scss.info}>занято</p>
                }
              </button>
            ))}
          </div>
          <div className={scss.right}>
            {right.map((seat) => (
              <button
                className={`${scss.seatRightItem} ${seat.status === 'занято' ? scss.disabled : ''}`}
                key={seat.id}
                disabled={seat.status === 'занято'}
                onClick={() => toggleSeat(seat.id)}
                onMouseEnter={() => setActiveRow(seat.row)}
                onMouseLeave={() => setActiveRow(null)}
              >
                <SeatLogo status={seat.status} />
                 {
                  seat.status !== 'занято' ? (
                    <p className={scss.info}>
                  ряд: <span>{seat.row}</span>; номер: <span>{seat.number}</span> цена:{' '}
                  <span>{seat.price}</span>
                </p>
                  ) : <p className={scss.info}>занято</p>
                }
              </button>
            ))}
          </div>
        </div>
        <div className={scss.center}>
          {center.map((seat) => (
            <button
              className={`${scss.seatCenterItem} ${seat.status === 'занято' ? scss.disabled : ''} `}
              key={seat.id}
              disabled={seat.status === 'занято'}
              onClick={() => toggleSeat(seat.id)}
              onMouseEnter={() => setActiveRow(seat.row)}
              onMouseLeave={() => setActiveRow(null)}
            >
              <SeatLogo status={seat.status} />
               {
                  seat.status !== 'занято' ? (
                    <p className={scss.info}>
                  ряд: <span>{seat.row}</span>; номер: <span>{seat.number}</span> цена:{' '}
                  <span>{seat.price}</span>
                </p>
                  ) : <p className={scss.info}>занято</p>
                }
            </button>
          ))}
        </div>
        <div className={scss.back}>
          {back.map((seat) => (
            <button
              className={`${scss.seatBackItem} ${seat.status === 'занято' ? scss.disabled : ''} `}
              key={seat.id}
              disabled={seat.status === 'занято'}
              onClick={() => toggleSeat(seat.id)}
              onMouseEnter={() => setActiveRow(seat.row)}
              onMouseLeave={() => setActiveRow(null)}
            >
              <SeatLogo status={seat.status} />
               {
                  seat.status !== 'занято' ? (
                    <p className={scss.info}>
                  ряд: <span>{seat.row}</span>; номер: <span>{seat.number}</span> цена:{' '}
                  <span>{seat.price}</span>
                </p>
                  ) : <p className={scss.info}>занято</p>
                }
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
