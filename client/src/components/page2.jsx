import React from 'react'

const Page2 = () => {
  return (
    <div>
      <div>
         <div>
            <h3>Univerz's Commitment to Academic Excellence</h3>
         </div>
         <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus inventore distinctio error ipsa obcaecati temporibus?
         </div>
      </div>
      <div className='grid '>
         <div>
            <div>
               img = first image
            </div>
            <div className='flex flex-col justify-between'>
               img = second image 
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, blanditiis quis debitis eos sed sapiente hic! Reiciendis accusamus impedit dolores?
               </p>
               <button>
                  Read More
               </button>
            </div>
         </div>
         <div>
            <span>
               <h5 className='text-blue-700'>35+</h5>
               <h6>Course</h6>
            </span>
            <span>
               <h5 className='text-blue-700'>56+</h5>
               <h6>Startups</h6>
            </span>
            <span>
               <h5 className='text-blue-700'>100+</h5>
               <h6>Languages</h6>
            </span>
            <span>
               <h5 className='text-blue-700'>150+</h5>
               <h6>Professors</h6>
            </span>
         </div>
      </div>
      
    </div>
  )
}

export default Page2