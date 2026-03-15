"use client";
import { CalendarDays, MoveLeft } from 'lucide-react';
import scss from '../styles/Cinema.module.scss';
import Seat from '../ui/Seat';
import Booking from '../ui/Booking';
import { motion } from 'framer-motion';
import { useSeats } from '../useContext';

const Cinema = () => {
   
  return (
   <main>
     <section className={scss.cinema}>
      {/* Header */}
      <header className={scss.header}>
        <button title='назад' className={scss.backButton}>
          <MoveLeft />
        </button>
        {/* <h1>Бронируйте место</h1> */}
        <button className={scss.calendarButton}>
          <CalendarDays />
        </button>
      </header>
      {/* Main Content */}
      <div className={scss.mobileWarning}>
    <p>Ваше устройство не поддерживается. Минимальная ширина экрана для бронирования — 382px.</p>
  </div>

      <div className={scss.container}>
        <div className={scss.main}>
          <div className={scss.screen} title='TV' />
         
          <Seat />
          <motion.div 
  className={scss.sections}
  layout // Эң маанилүү проп ушул!
  transition={{ 
    type: "spring", // Пружина эффекти (табигыйраак)
    stiffness: 300, 
    damping: 30 // Катуулугу жана басаңдашы
  }}
>
  <motion.p layout>
    <span className={scss.free} /> свободный
  </motion.p>
  <motion.p layout>
    <span className={scss.taken} /> занято
  </motion.p>
  <motion.p layout>
    <span className={scss.selected} /> выбрано
  </motion.p>
</motion.div>
          <Booking />
        </div>
      </div>
    </section>
   </main>
  );
};

export default Cinema;
