'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import initialLeftSeats from '../seatfrontleft.json';
import initialRightSeats from '../seatfrontright.json';
import initialCenterSeats from '../seatscenter.json';
import initialBackSeats from '../seatback.json';

export type SeatType = {
  id: number;
  row: number;
  number: number;
  status: string;
  price: number;
};

interface SeatContextType {
  left: SeatType[];
  right: SeatType[];
  center: SeatType[];
  back: SeatType[];
  isLoading: boolean;
  toggleSeat: (id: number) => void;
  confirmBooking: () => void;
  resetSelection: () => void;
}

const SeatContext = createContext<SeatContextType | undefined>(undefined);

export const SeatProvider = ({ children }: { children: ReactNode }) => {
  const [left, setLeft] = useState<SeatType[]>(initialLeftSeats);
  const [right, setRight] = useState<SeatType[]>(initialRightSeats);
  const [center, setCenter] = useState<SeatType[]>(initialCenterSeats);
  const [back, setBack] = useState<SeatType[]>(initialBackSeats);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem('booked_seats');
    if (saved) {
      const { leftS, rightS, centerS, backS } = JSON.parse(saved);
      setLeft(leftS);
      setRight(rightS);
      setCenter(centerS);
      setBack(backS);
    }
  }, []);

  const saveToStorage = (l: SeatType[], r: SeatType[], c: SeatType[], b: SeatType[]) => {
    sessionStorage.setItem(
      'booked_seats',
      JSON.stringify({
        leftS: l,
        rightS: r,
        centerS: c,
        backS: b,
      }),
    );
  };

  const toggleSeat = (id: number) => {
    const update = (prev: SeatType[]) =>
      prev.map((seat) => {
        if (seat.id === id) {
          if (seat.status === 'свободно') return { ...seat, status: 'выбрано' };
          if (seat.status === 'выбрано') return { ...seat, status: 'свободно' };
        }
        return seat;
      });

    setLeft((prev) => update(prev));
    setRight((prev) => update(prev));
    setCenter((prev) => update(prev));
    setBack((prev) => update(prev));
  };

  const confirmBooking = async () => {
    setIsLoading(true);

    const markAsBusy = (prev: SeatType[]) =>
      prev.map((seat) => (seat.status === 'выбрано' ? { ...seat, status: 'занято' } : seat));

    const newLeft = markAsBusy(left);
    const newRight = markAsBusy(right);
    const newCenter = markAsBusy(center);
    const newBack = markAsBusy(back);

    setLeft(newLeft);
    setRight(newRight);
    setCenter(newCenter);
    setBack(newBack);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    saveToStorage(newLeft, newRight, newCenter, newBack);
    setIsLoading(false);
  };

  const resetSelection = () => {
    setLeft(initialLeftSeats);
    setRight(initialRightSeats);
    setCenter(initialCenterSeats);
    setBack(initialBackSeats);
    sessionStorage.removeItem('booked_seats');
  };

  return (
    <SeatContext.Provider
      value={{ left, right, center, back, toggleSeat, confirmBooking, resetSelection, isLoading }}
    >
      {children}
    </SeatContext.Provider>
  );
};

export const useSeats = () => {
  const context = useContext(SeatContext);
  if (!context) throw new Error('Error');
  return context;
};
