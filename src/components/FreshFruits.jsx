import React, { useEffect, useState } from 'react';
import img1 from '../assets/FreshFruits/Papaya.png';
import img2 from '../assets/FreshFruits/Strawberry.png';
import data from '../Data/Fresh_Fruits.json';
import Card from '../layouts/Card';

const FreshFruits = () => {
  return (
    <div className='min-h-screen flex lg:mb-0 mb-12 flex-col justify-start items-center lg:px-32 px-5'>
      <h1 className='text-4xl font-semibold text-center pt-24 pb-12 mt-[2rem]'>Fresh Fruits</h1>
      <div className='flex flex-col lg:flex-row gap-8 justify-center'>
        <div className='flex flex-col gap-8 justify-center'>
          <Card
            img={img1}
            title={data[0].Name}
            brief={data[0].Brief}
            details={data[0].Details}
            price={data[0].Price}
          />
        </div>
        <div className='flex flex-col gap-8 justify-center'>
          <Card
            img={img2}
            title={data[1].Name}
            brief={data[1].Brief}
            details={data[1].Details}
            price={data[1].Price}
          />
        </div>
      </div>
    </div>
  );
};

export default FreshFruits;
