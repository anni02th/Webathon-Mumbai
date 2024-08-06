import React from 'react';

const Page2 = () => {
  return (
    <div className="relative w-[80%] m-auto my-28 flex flex-col items-center justify-center">

      <div className='flex gap-4 justify-between items-center mb-8'>
        <h3 className='text-Dblue text-4xl font-bold w-[90%]'>Commitment to Academic Excellence</h3>
        <p className='text-lg font-medium text-end'>
        K.K.Wagh nurtures future leaders through innovative technology and hands-on experience. Join us to excel in your engineering journey and shape tomorrow’s world."
        </p>
      </div>
      <div className='flex gap-6'>
        <div className="flex flex-col md:flex-row gap-6 relative justify-between w-full">
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <img src="Rectangle 12.png" alt="Rectangle 12" />
          </div>
          <div className="flex flex-col justify-between w-full md:w-[50%]">
            <img src="Rectangle 13.png" width={'400px'} alt="Rectangle 13" className="self-center md:self-start" />
            <p className="mt-4 md:mt-0">
            Dedicated to academic excellence, K.K. Wagh fosters innovation through cutting-edge technology and hands-on learning. Prepare to excel and lead in the world of engineering."
            </p>
            <button className="bg-Dblue text-white py-1 px-6 rounded-full hover:bg-Dbblue transition duration-200 w-[180px] mt-4 md:mt-0 self-center md:self-start">
              Read More
            </button>
          </div>
          <section className="absolute flex flex-col justify-center items-center bg-white rounded-2xl p-4 top-1/2 left-1/2 transform -translate-x-[15%] -translate-y-1/2">
            <h3 className="text-Dblue text-xl font-bold">50k+</h3>
            <h5 className="font-medium">Students</h5>
            <div className="flex mt-2">
              <img src="Ellipse 1.png" alt="Student 1" className="z-10 relative left-3 border-2 border-white rounded-full" />
              <img src="Ellipse 3.png" alt="Student 2" className="z-20 relative left-0 border-2 border-white rounded-full" />
              <img src="Ellipse 4.png" alt="Student 3" className="z-30 relative -left-3 border-2 border-white rounded-full" />
            </div>
          </section>
        </div>

        <div className='flex flex-col justify-between text-2xl'>
          <span className='flex flex-col justify-center items-center bg-white rounded-xl px-10 py-4'>
            <h5 className='text-Dblue font-medium'>35+</h5>
            <h6>Course</h6>
          </span>
          <span className='flex flex-col justify-center items-center bg-white rounded-xl px-10 py-4'>
            <h5 className='text-Dblue'>56+</h5>
            <h6>Startups</h6>
          </span>
          <span className='flex flex-col justify-center items-center bg-white rounded-xl px-10 py-4'>
            <h5 className='text-Dblue'>100+</h5>
            <h6>Languages</h6>
          </span>
          <span className='flex flex-col justify-center items-center bg-white rounded-xl px-10 py-4'>
            <h5 className='text-Dblue'>150+</h5>
            <h6>Professors</h6>
          </span>
        </div>
      </div>

    </div>
  )
}

export default Page2;
