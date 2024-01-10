import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-backgroundColor font-semibold text-6xl">
          Elevate Your Inner Foodie with Every Bite.
        </h1>
        <p className="ml-1 text-backgroundColor">
          Welcome to Cluster Globals – Your Freshness Source!
        </p>
        <div className='flex justify-center mt-5 lg:justify-start'>
          <Button
            title='Order Now'
            className
            onClick={() => openLinkInNewTab('https://wa.me/message/SISUP46GKRC6H1')}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
