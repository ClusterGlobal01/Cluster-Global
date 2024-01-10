// Button.js
import React from 'react';

const Button = (props) => {
  const fixedPhoneNumber = '+9925149739';
  const whatsappLink = `https://wa.me/${fixedPhoneNumber}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <div>
      <button
        onClick={handleWhatsAppClick}
        className='px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full'
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
