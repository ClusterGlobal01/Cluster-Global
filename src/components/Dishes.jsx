import React from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";

import img5 from "../assets/img/img6.jpg";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our Products
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        <DishesCard link={"/Kitchen Spices & Puries"}img={img1} title="Kitchen Spices & Puries" price=" " />
        <DishesCard link={"/Eco Packaging"} img={img2} title="Eco Packaging" price=" " />
        <DishesCard link={"/Fresh Vegetables"}img={img3} title="Fresh Vegetables" price=" " />
        <DishesCard link={"/Fresh Fruits"} img={img4} title="Fresh Fruits" price=" " />
        <DishesCard link={"/Dehydrated Flakes & Powder"}img={img5} title="Dehydrated Flakes & Powder" price=" " />
      </div>
    </div>
  );
};

export default Dishes;
