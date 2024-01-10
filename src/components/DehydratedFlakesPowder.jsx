import React, { useEffect, useState } from "react";

import img1 from "../assets/DehydratedFlakesPowder/DehydratedBitterGourd.jpg";
import img2 from "../assets/DehydratedFlakesPowder/DehydratedGarlic.jpg";
import data from "../Data/DehydratedFlakesPowder.json"
import Card from "../layouts/Card";

const DehydratedFlakesPowder = () => {
    
  return (
    <div className='min-h-screen flex lg:mb-0 mb-12 flex-col justify-start items-center lg:px-32 px-5'>
      <h1 className='text-4xl font-semibold text-center pt-24 pb-12 mt-[2rem]'>Dehydrated Flakes And Powder</h1>
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
        <div className=' flex flex-wrap gap-8 justify-center'>
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

export default DehydratedFlakesPowder;
