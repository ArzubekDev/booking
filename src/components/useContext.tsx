"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';
import initialLeftSeats from "../seatfrontleft.json";
import initialRightSeats from "../seatfrontright.json";
import initialCenterSeats from "../seatscenter.json"
import initialBackSeats from "../seatback.json"

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
  toggleSeat: (id: number) => void;
  confirmBooking: () => void;
}

const SeatContext = createContext<SeatContextType | undefined>(undefined);

export const SeatProvider = ({ children }: { children: ReactNode }) => {
  const [left, setLeft] = useState<SeatType[]>(initialLeftSeats);
  const [right, setRight] = useState<SeatType[]>(initialRightSeats);
  const [center, setCenter] = useState<SeatType[]>(initialCenterSeats);
  const [back, setBack] = useState<SeatType[]>(initialBackSeats);

  const toggleSeat = (id: number) => {
    setLeft((prev) =>
      prev.map((seat) => {
        if (seat.id === id) {
          if (seat.status === "свободно") return { ...seat, status: "выбрано" };
          if (seat.status === "выбрано") return { ...seat, status: "свободно" };
        }
        return seat;
      })
    );
    setRight((prev) =>
      prev.map((seat) => {
        if (seat.id === id) {
          if (seat.status === "свободно") return { ...seat, status: "выбрано" };
          if (seat.status === "выбрано") return { ...seat, status: "свободно" };
        }
        return seat;
      })
    );  
    setCenter((prev) =>
      prev.map((seat) => {
        if (seat.id === id) {
          if (seat.status === "свободно") return { ...seat, status: "выбрано" };
          if (seat.status === "выбрано") return { ...seat, status: "свободно" };
        }
        return seat;
      })
    );  
    setBack((prev) =>
      prev.map((seat) => {
        if (seat.id === id) {
          if (seat.status === "свободно") return { ...seat, status: "выбрано" };
          if (seat.status === "выбрано") return { ...seat, status: "свободно" };
        }
        return seat;
      })
    );
  };

  const confirmBooking = () => {
    setLeft((prev) =>
      prev.map((seat) =>
        seat.status === "выбрано" ? { ...seat, status: "занято" } : seat
      )
    );
    setRight((prev) =>
      prev.map((seat) =>
        seat.status === "выбрано" ? { ...seat, status: "занято" } : seat
      )
    );
    setCenter((prev) =>
      prev.map((seat) =>
        seat.status === "выбрано" ? { ...seat, status: "занято" } : seat
      )
    );
    setBack((prev) =>
      prev.map((seat) =>
        seat.status === "выбрано" ? { ...seat, status: "занято" } : seat
      )
    );
  };

  return (
    <SeatContext.Provider value={{ left, right, center,back, toggleSeat, confirmBooking }}>
      {children}
    </SeatContext.Provider>
  );
};

export const useSeats = () => {
  const context = useContext(SeatContext);
  if (!context) throw new Error("Error");
  return context;
};