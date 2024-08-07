import React, { useState, useEffect } from 'react';
import './Page5.css'; // Ensure to create this CSS file with transition styles

const reviews = [
  {
    image: 'page5-1.png',
    name: 'Carmen Hodkiewicz',
    title: 'Computer Science and Design Engineer',
    review: 'As a student at KK Wagh Engineering College, I appreciate the rigorous academics and the knowledgeable, supportive faculty. The modern infrastructure and extensive extracurricular activities provide a balanced and enriching college experience. Overall, I feel well-prepared for my future career thanks to the comprehensive education and active career services.'
  },
  {
    image: 'secondphoto.jpg',
    name: 'Angelina Jollie',
    title: 'Software Developer',
    review: 'KK Wagh Engineering College has provided me with a solid foundation in engineering principles and hands-on experience. The faculty are always available to help, and the campus facilities are excellent.'
  },
  {
    image: 'thirdphoto.jpg',
    name: 'Jane Smith',
    title: 'Mechanical Engineer',
    review: 'The diverse range of extracurricular activities and the supportive community at KK Wagh Engineering College have made my time here truly enjoyable. I feel confident and ready to tackle my future career.'
  }
];

<<<<<<< HEAD
export default function page5() {
  return (
    <div>
      
    </div>
  )
}
=======
const Page5 = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { image, name, title, review } = reviews[currentReviewIndex];

  return (
    <div className='relative flex flex-col items-center justify-center text-center my-20 p-12 bg-Dblue'>
      <div className="relative p-4 flex flex-col text-center">
        <h1 className='text-4xl font-bold m-4 text-white'>What Our Students</h1>
        <h1 className='text-4xl font-bold text-white'>Say About Us</h1>
        <p className="text-lg m-6 max-w-xl mx-auto text-balance text-white">
          Hear directly from our students about their experiences at KK Wagh Engineering College.
        </p>
      </div>

      <div className='relative w-[80%] overflow-hidden'>
        <div className='carousel flex transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}>
          {reviews.map((review, index) => (
            <div key={index} className='flex flex-col items-center justify-center min-w-full'>
              <img src={review.image} alt={review.name} className='h-48 w-48 object-cover rounded-full' />
              <h1 className='text-3xl m-8 font-semibold text-white'>{review.name}</h1>
              <p className='text-lg text-white'>{review.title}</p>
              <p className='text-lg text-white mt-4'>{review.review}</p>
            </div>
          ))}
        </div>
        <div className='absolute inset-0 flex items-center justify-between z-100'>
          <button className="fa-solid fa-angle-left text-4xl text-white bg-transparent border-none cursor-pointer"
            onClick={() => setCurrentReviewIndex((currentReviewIndex - 1 + reviews.length) % reviews.length)}></button>
          <button className="fa-solid fa-angle-right text-4xl text-white bg-transparent border-none cursor-pointer"
            onClick={() => setCurrentReviewIndex((currentReviewIndex + 1) % reviews.length)}></button>
        </div>
      </div>
      <p className="text-lg m-6 max-w-xl mx-auto text-balance text-white">
        {review}
      </p>
    </div>
  );
};

export default Page5;
>>>>>>> 93df462bd321050a744bdd6629e3291a5ebfe37b
