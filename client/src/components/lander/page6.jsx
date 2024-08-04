import React from 'react'

const Page6 = () => {
  return (
    <div className='w-[80%] m-auto my-28 flex flex-col items-center justify-center'>
      <div className='flex gap-4 justify-between items-center mb-8'>
        <h3 className='text-Dblue text-4xl font-bold'>Check out our Latest Articles and Knowledge</h3>
        <p className='text-lg font-medium flex flex-col'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus inventore distinctio error ipsa obcaecati temporibus?
          <button className="bg-Dblue text-white py-1 px-6 rounded-full mr-4 hover:bg-Dbblue transition duration-200 w-[180px] self-end">Read More</button>
        </p>
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white rounded-3xl hover:shadow-xl transition duration-300 hover:scale-95">
            <img
              src="Rectangle 22.png"
              alt="Graduation"
              className="rounded-lg mb-4 w-full"
            />
            <div className='p-6'>
              <button className="bg-Dblue text-white py-1 px-6 rounded-full mb-4 mr-4 hover:bg-Dbblue transition duration-200 w-[180px] self-end">
                Insight
              </button>
              <h2 className='text-black font-medium'>12 Aug 2023</h2>
              <h3 className="text-Dblue text-xl font-bold">Many Univerz university graduates immediately work</h3>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl hover:shadow-xl transition duration-300 hover:scale-95">
            <img
              src="Rectangle 22-1.png"
              alt="Students"
              className="rounded-lg mb-4 w-full"
            />
            <div className='p-6'>
              <button className="bg-Dblue text-white py-1 px-6 rounded-full mb-4 mr-4 hover:bg-Dbblue transition duration-200 w-[180px] self-end">
                Tips
              </button>
              <h2 className='text-black font-medium'>12 Dec 2023</h2>
              <h3 className="text-Dblue text-xl font-bold">Tips so you don't get lazy in college</h3>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl hover:shadow-xl transition duration-300 hover:scale-95">
            <img
              src="Rectangle 22-2.png"
              alt="Library"
              className=" mb-4 rounded-lg w-full"
            />
            <div className='p-6'>
              <button className="bg-Dblue text-white py-1 px-6 rounded-full mb-4 mr-4 hover:bg-Dbblue transition duration-200 w-[180px] self-end">
                Recomend
              </button>
              <h2 className='text-black font-medium'>12 Nov 2023</h2>
              <h3 className="text-Dblue text-xl font-bold">10 recommendations for good college places</h3>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page6