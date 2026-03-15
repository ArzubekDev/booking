'use client';
import { useState } from 'react';
import scss from '../styles/Seat.module.scss';
import { useSeats } from '../useContext';
import SeatLogo from './SeatLogo';
import { delay, motion } from 'framer-motion';

const Seat = () => {
  const { left, right, center, back, toggleSeat } = useSeats();
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const allSeats = [...left, ...right, ...center, ...back];
  const allBooked = allSeats.every((seat) => seat.status === 'занято');

  const seatAnimation = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.03 }
  })
};

  return (
    <div className={scss.container}>
      <div className={scss.seats}>
        {allBooked && (
          <p className={scss.message}>Все места заняты. Пожалуйста, выберите другой сеанс.</p>
        )}
        <div className={scss.front}>
          <div className={scss.left}>
            {left.map((seat, index) => (
              <motion.button
                key={seat.id}
               variants={seatAnimation}
               initial="hidden"
               animate="visible"
               custom={index}
                className={`${scss.seatLeftItem} ${seat.status === 'занято' ? scss.disabled : ''}`}
                disabled={seat.status === 'занято'}
                onClick={() => toggleSeat(seat.id)}
                onMouseEnter={() => setActiveRow(seat.row)}
                onMouseLeave={() => setActiveRow(null)}
              >
                <SeatLogo status={seat.status} />

                {seat.status !== 'занято' ? (
                  <p className={scss.info}>
                    ряд: <span>{seat.row}</span>; номер: <span>{seat.number}</span> цена:{' '}
                    <span>{seat.price}</span>
                  </p>
                ) : (
                  <p className={scss.info}>занято</p>
                )}
              </motion.button>
            ))}
          </div>
          <div className={scss.right}>
            {right.map((seat, index) => (
              <motion.button
               variants={seatAnimation}
               initial="hidden"
               animate="visible"
               custom={index}
                className={`${scss.seatRightItem} ${seat.status === 'занято' ? scss.disabled : ''}`}
                key={seat.id}
                disabled={seat.status === 'занято'}
                onClick={() => toggleSeat(seat.id)}
                onMouseEnter={() => setActiveRow(seat.row)}
                onMouseLeave={() => setActiveRow(null)}
              >
                <SeatLogo status={seat.status} />
                {seat.status !== 'занято' ? (
                  <p className={scss.info}>
                    ряд: <span>{seat.row}</span>; номер: <span>{seat.number}</span> цена:{' '}
                    <span>{seat.price}</span>
                  </p>
                ) : (
                  <p className={scss.info}>занято</p>
                )}
              </motion.button>
            ))}
          </div>
        </div>
        <div className={scss.center}>
          {center.map((seat, index) => (
            <motion.button
             variants={seatAnimation}
               initial="hidden"
               animate="visible"
               custom={index}
              className={`${scss.seatCenterItem} ${seat.status === 'занято' ? scss.disabled : ''} `}
              key={seat.id}
              disabled={seat.status === 'занято'}
              onClick={() => toggleSeat(seat.id)}
              onMouseEnter={() => setActiveRow(seat.row)}
              onMouseLeave={() => setActiveRow(null)}
            >
              <SeatLogo status={seat.status} />
              {seat.status !== 'занято' ? (
                <p className={scss.info}>
                  ряд: <span>{seat.row}</span>; номер: <span>{seat.number}</span> цена:{' '}
                  <span>{seat.price}</span>
                </p>
              ) : (
                <p className={scss.info}>занято</p>
              )}
            </motion.button>
          ))}
        </div>
        <div className={scss.back}>
          {back.map((seat, index) => (
            <motion.button
             variants={seatAnimation}
               initial="hidden"
               animate="visible"
               custom={index}
              className={`${scss.seatBackItem} ${seat.status === 'занято' ? scss.disabled : ''} `}
              key={seat.id}
              disabled={seat.status === 'занято'}
              onClick={() => toggleSeat(seat.id)}
              onMouseEnter={() => setActiveRow(seat.row)}
              onMouseLeave={() => setActiveRow(null)}
            >
              <SeatLogo status={seat.status} />
              {seat.status !== 'занято' ? (
                <p className={scss.info}>
                  ряд: <span>{seat.row}</span>; номер: <span>{seat.number}</span> цена:{' '}
                  <span>{seat.price}</span>
                </p>
              ) : (
                <p className={scss.info}>занято</p>
              )}
            </motion.button>
          ))}
        </div>
      </div>
      <div className={scss.numbers}>
        {[1, 2, 3, 4, 5].map((num, index) => (
          <motion.div
           variants={seatAnimation}
               initial="hidden"
               animate="visible"
               custom={index}
               
            key={num}
            className={`${scss.numberItem} ${activeRow === num ? scss.activeRow : ''}`}
          >
            <span></span>
            {num}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Seat;
