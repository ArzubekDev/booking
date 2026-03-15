import React from 'react'
import scss from "../styles/SeatLogo.module.scss";
import {motion} from 'framer-motion';

interface SeatLogoProps {
    status: string;
} 

const SeatLogo = ({ status }: SeatLogoProps) => {
  return (
    <div 
      className={`${scss.seat} ${status === 'свободно' ? scss.free : status === 'занято' ? scss.taken : scss.selected }`}
    >
        <span className={`${scss.small} ${status === 'свободно' ? scss.free : status === 'занято' ? scss.taken : scss.selected}`}/>
    </div>
  )
}

export default SeatLogo