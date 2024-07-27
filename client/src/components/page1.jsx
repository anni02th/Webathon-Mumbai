import React from 'react';
import backgroundImage from '/Rectangle 5.png';

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }} />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 text-white p-4 w-[50%]">
        <h1 className="text-6xl font-bold mb-4">
          Shaping the Future Through Education and Innovation
        </h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa sit amet nisi blandit vehicula. Donec sollicitudin luctus fermentum.
        </p>
        <div className='flex flex-wrap gap-4 justify-center'>
          <button className="bg-Dblue text-white py-1 px-6 rounded-full mr-4 hover:bg-Dbblue transition duration-200">Get Started</button>
          <button className="bg-white text-Dblue py-2 px-6 rounded-full hover:bg-blue-50 transition duration-200">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
