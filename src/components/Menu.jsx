import React from "react";
import DishesCard from "../layouts/DishesCard";
import menu1 from "../assets/img/img5.png";
import menu2 from "../assets/img/img4.jpg";
import menu3 from "../assets/img/img6.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 -mt-24 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Premium Product
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={menu1} title="Kitchen Spices" price=" " />
        <DishesCard img={menu2} title="Fresh Fruit" price=" " />
        <DishesCard img={menu3} title="Dehydrated Flakes & Powder" price=" " />
      </div>
    </div>
  );
};

export default Menu;
