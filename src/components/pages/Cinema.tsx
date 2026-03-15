import { CalendarDays, MoveLeft } from 'lucide-react';
import scss from '../styles/Cinema.module.scss';
import Seat from '../ui/Seat';
import Booking from '../ui/Booking';

const Cinema = () => {
  return (
   <main>
     <section className={scss.cinema}>
      {/* Header */}
      <header className={scss.header}>
        <button className={scss.backButton}>
          <MoveLeft />
        </button>
        {/* <h1>Бронируйте место</h1> */}
        <button className={scss.calendarButton}>
          <CalendarDays />
        </button>
      </header>
      {/* Main Content */}
      <div className={scss.container}>
        <div className={scss.main}>
          <div className={scss.screen} />
          <Seat />
          <div className={scss.sections}>
            <p>
              <span className={scss.free} /> свободный
            </p>
            <p>
              <span className={scss.taken} /> занято
            </p>
            <p>
              <span className={scss.selected} /> выбрано
            </p>
          </div>
          <Booking />
        </div>
      </div>
    </section>
   </main>
  );
};

export default Cinema;
