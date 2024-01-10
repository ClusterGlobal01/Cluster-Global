import React, { useEffect, useState } from "react";
import img1 from "../assets/EcoPackaging/package1.jpg";
import data from "../Data/EcoPackaging.json"
import Card from "../layouts/Card";

const EcoPackaging = () => {
    
  return (
    <div className='min-h-screen flex flex-col justify-start items-center lg:px-32 px-5'>
      <h1 className='text-4xl font-semibold text-center pt-24 pb-12 mt-[2rem]'>Eco Packaging</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div className=' flex flex-wrap gap-8 justify-center'>
          <Card
            img={img1}
            title={data[0].Name}
            brief={data[0].Brief}
            details={data[0].Details}
            price={data[0].Price}
          />
        </div>
      </div>
    </div>
  );
};

export default EcoPackaging;
