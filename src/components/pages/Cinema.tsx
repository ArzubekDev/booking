import { CalendarDays, MoveLeft } from 'lucide-react'; 
import scss from "../styles/Cinema.module.scss";
import Seat from '../ui/Seat';


const Cinema = () => {

  return (
    <section className={scss.cinema}>
      <div className={scss.header}>
        <button className={scss.backButton}>
          <MoveLeft/>
        </button>
        <h1>Бронируйте место</h1>
        <button className={scss.calendarButton}>
          <CalendarDays />
        </button>
      </div>
<div className={scss.container}>
<div className={scss.main}>
    <div className={scss.screen}/>
<Seat/>
      <div className={scss.sections}>
        <p><span className={scss.free}/> свободный</p>
        <p><span className={scss.taken}/> занято</p>
        <p><span className={scss.selected}/> выбрано</p>
      </div>
</div>
</div>


    </section>
  )
}

export default Cinema