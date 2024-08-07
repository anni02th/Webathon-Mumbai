import React from 'react';

const Page6 = () => {
  return (
    <div className='w-[90%] lg:w-[80%] m-auto my-10 flex flex-col items-center justify-center'>
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center lg:justify-between items-center mb-10 text-center lg:text-left'>
        <h3 className='text-3xl lg:text-4xl font-bold text-Dblue'>
          Check out our Latest Articles and Knowledge
        </h3>
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white rounded-3xl hover:shadow-xl transition duration-300 hover:scale-95">
            <img
              src="Rectangle 22.png"
              alt="Graduation"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <div className='p-6'>
              <button className="bg-Dblue text-white py-1 px-6 rounded-full mb-4 hover:bg-Dbblue transition duration-200 w-full md:w-auto">
                Insight
              </button>
              <h2 className='text-black font-medium'>12 Aug 2023</h2>
              <h3 className="text-Dblue text-lg lg:text-xl font-bold">Many university graduates immediately work</h3>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl hover:shadow-xl transition duration-300 hover:scale-95">
            <img
              src="Rectangle 22-1.png"
              alt="Students"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <div className='p-6'>
              <button className="bg-Dblue text-white py-1 px-6 rounded-full mb-4 hover:bg-Dbblue transition duration-200 w-full md:w-auto">
                Tips
              </button>
              <h2 className='text-black font-medium'>12 Dec 2023</h2>
              <h3 className="text-Dblue text-lg lg:text-xl font-bold">Tips so you don't get lazy in college</h3>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl hover:shadow-xl transition duration-300 hover:scale-95">
            <img
              src="Rectangle 22-2.png"
              alt="Library"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <div className='p-6'>
              <button className="bg-Dblue text-white py-1 px-6 rounded-full mb-4 hover:bg-Dbblue transition duration-200 w-full md:w-auto">
                Recommend
              </button>
              <h2 className='text-black font-medium'>12 Nov 2023</h2>
              <h3 className="text-Dblue text-lg lg:text-xl font-bold">10 recommendations for good college places</h3>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page6;
