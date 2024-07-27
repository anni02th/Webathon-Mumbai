import React from 'react'

const Page2 = () => {
  return (
    <div className='w-[80%] m-auto my-10'>
      <div className='flex gap-4 justify-between items-center'>
         <h3 className='text-Dblue text-4xl font-bold'>Univerz's Commitment to Academic Excellence</h3>
         <p className='text-lg'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus inventore distinctio error ipsa obcaecati temporibus?
         </p>
      </div>
      <div className='grid '>
         <div className='flex gap-6'>
            <div>
               <img src="Rectangle 12.png" width={'630px'} alt="" />
            </div>
            <div className='flex flex-col justify-between w-[50%]'>
               <img src="Rectangle 13.png" width={'400px'} alt="" />
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, blanditiis quis debitis eos sed sapiente hic! Reiciendis accusamus impedit dolores?
               </p>
               <button className="bg-Dblue text-white py-1 px-6 rounded-full mr-4 hover:bg-Dbblue transition duration-200">Read More</button>

            </div>
         </div>
         <div>
            <span>
               <h5 className='text-Dblue'>35+</h5>
               <h6>Course</h6>
            </span>
            <span>
               <h5 className='text-Dblue'>56+</h5>
               <h6>Startups</h6>
            </span>
            <span>
               <h5 className='text-Dblue'>100+</h5>
               <h6>Languages</h6>
            </span>
            <span>
               <h5 className='text-Dblue'>150+</h5>
               <h6>Professors</h6>
            </span>
         </div>
      </div>

    </div>
  )
}

export default Page2