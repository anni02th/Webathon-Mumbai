import React, { useEffect, useState } from 'react';

const images = [
  '/slider1.png',
  '/slider2.png',
  '/slider3.png',
  '/slider4.png',
  '/slider5.png',
  '/slider6.png',
];

const Page1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsSliding(false);
      }, 500); // Match this duration with the CSS transition duration
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsSliding(false);
    }, 500);
  };

  return (
    <div className="relative overflow-hidden w-[100%] ">
      <div className="flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 p-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Page1;
