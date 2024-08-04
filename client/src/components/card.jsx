import React from 'react'

export default function Card({heading , srcimg}) {
    return (
        <div className='w-80 h-40 bg-white rounded-xl border-gray-300 border-2 shadow-md flex flex-col
        hover:scale-95 transition duration-300'>
            <h1 className='text-xl font-semibold m-4 mb-0 text-start '>{heading}</h1>
            <img src={srcimg} alt="" className='h-[70%] w-[100%] object-contain'/>
        </div>
    )
}
