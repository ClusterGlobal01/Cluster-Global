import React from "react";
import img from "../assets/img/cg1.jpg";
import Button from "../layouts/Button";

const openLinkInNewTab = (url) => {
  const newTab = window.open(url, '_blank');
  if (newTab) {
    newTab.focus();
  }
};

const About = () => {
  return (
    <div className='min-h-screen flex flex-col sm:flex-col sm:ml-32 sm:mr-32 lg:pl-72 just md:flex-col lg:flex-row justify-center lg:-mt-24 lg:-ml-20 items-center px-5'>
      <div className='flex flex-col items-center -mt-4 pt-32'>
        <h1 className='font-semibold text-4xl text-center md:text-start'>Why Choose Us?</h1>
        <p className='mt-1 text-brightColor'>Welcome to Cluster Globals</p>
        <p className='-mt-1 mb-4 text-brightColor'> – Your Freshness Source!</p>
        <p className='mt-4 text-start mx-auto'>
          Cluster Globals exports top-quality products to bring the best to your table. Enjoy the
          goodness of nature with our Fresh Vegetables and Fruits, handpicked for freshness and
          flavor. Elevate your dishes with our Kitchen Spices & Purées, and discover the convenience
          of Dehydrated Flakes & Powder for easy and nutritious cooking.
        </p>
        <p className='mt-1 text-brightColor'> Choose Cluster Globals for a world of freshness delivered right to you!</p>
        <div className='flex justify-center mt-5 lg:justify-start'>
          <Button
            title='Learn More'
            className
            onClick={() => openLinkInNewTab('https://wa.me/message/SISUP46GKRC6H1')}
          />
        </div>
      </div>
      <img src={img} className='lg:mr-[140px] ml-16 mt-12 w-[550px] h-[450px]' alt='img' />
    </div>
  );
};

export default About;
