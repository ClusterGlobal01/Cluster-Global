import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { motion } from 'framer-motion';
import Button from "../layouts/Button";

import { Link } from "react-router-dom";

const DishesCard = (props) => {
  return (
    <motion.div
      className='w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] shadow-md hover:shadow-2xl transition-shadow duration-300 s rounded-lg'
      whileHover={{ scale: 1.03 }}
      style={{ width: '420px', height:'470px' }}
    >
      <img className=' rounded-xl' src={props.img} alt='img' />
      <div className=' space-y-4'>
        <h3 className=' font-semibold text-center text-xl pt-6'>{props.title}</h3>
        <div className=' flex flex-row justify-center'>
          <BsStarFill className=' text-brightColor' />
          <BsStarFill className=' text-brightColor' />
          <BsStarFill className=' text-brightColor' />
          <BsStarFill className=' text-brightColor' />
          <BsStarHalf className=' text-brightColor' />
        </div>
        <div className=' flex flex-row items-center justify-center gap-4'>
          <h3 className=' font-semibold text-lg'>{props.price}</h3>
          <Link to={props.link}>Show More</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DishesCard;
