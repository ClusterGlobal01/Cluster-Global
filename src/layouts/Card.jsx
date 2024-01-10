import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { useState } from "react";

const Card = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [more, setMore] = useState(false);

  const handleInquireClick = () => {
    // Open the specified link in a new tab
    window.open("https://wa.me/message/SISUP46GKRC6H1", "_blank");
  };

  return (
    <motion.div
      layout
      whileHover={{ scale: 1.03 }}
      onHoverStart={() => {
        setIsOpen(true);
      }}
      onHoverEnd={() => {
        setIsOpen(false);
      }}
    >
      <div
        style={{ width: "420px", height: more ? "600px" : "470px" }}
        className={`flex flex-col justify-end items-center w-full lg:w-1/4 transition-shadow duration-300 shadow-${
          isOpen ? "lg" : "md"
        } rounded-lg shadow-lg hover:shadow-2xl`}
      >
        <img
          className="rounded-xl h-[250px] w-[385px] mb-6"
          src={`..${props.img}`}
          alt="img"
        />
        <div className="flex flex-col mx-auto px-5 mb-6 items-center space-y-4">
          <h3 className="flex font-semibold -mb-3 text-center text-xl">
            {props.title}
          </h3>
          {more ? (
            <div>
              <p>{props.details}</p>
              <p>
                <span
                  onClick={() => setMore(!more)}
                  className="text-blue-500 cursor-pointer hover:underline"
                >
                  {more ? " Read Less" : " Read More"}
                </span>
              </p>
              <p className="text-center text-3xl mt-3 font-medium">
                {props.price}
              </p>
            </div>
          ) : (
            <div>
              <p>{props.brief}</p>
              <p>
                <span
                  onClick={() => setMore(!more)}
                  className="text-blue-500 cursor-pointer hover:underline"
                >
                  {more ? " Read Less" : " Read More"}
                </span>
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-row mb-4 items-center justify-center">
          <Button title={"Inquire Now"} onClick={handleInquireClick} />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
