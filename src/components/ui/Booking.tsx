'use client';
import scss from '../styles/Booking.module.scss';
import { useSeats } from '../useContext';

const Booking = () => {
  const { left, right, center, back, confirmBooking, resetSelection, isLoading } = useSeats();

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
          <span className={scss.value}>{rows.length > 7 ? rows.substring(0, 7) + '...' : rows || '-'}</span>
        </div>

        <div className={scss.item}>
          <span className={scss.label}>Место</span>
          <span className={scss.value}>{seatNumbers.length > 10 ? seatNumbers.substring(0, 10) + '...' : seatNumbers || '-'}</span>
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
        <button
          className={`${scss.book_button} ${isLoading ? scss.loading : ''}`}
          disabled={totalCount === 0 || isLoading}
          onClick={confirmBooking}
        >
          {isLoading ? 'Забронировать...' : 'Забронировать'}
        </button>

       <button 
  className={scss.reset_button} 
  onClick={resetSelection} 
  disabled={!allSeats.some((seat) => seat.status === 'занято')}
>
  Сбросить выбор
</button>
      </div>
    </div>
  );
};

export default Booking;
