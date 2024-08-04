import React, { useState } from 'react'

export default function Faculty() {

    const card = (imgsrc, name, position, education) => (
        <div className='w-72 h-72 border-2 rounded-lg shadow-lg flex flex-col gap-2 justify-center items-center p-2'>
            <img src={imgsrc} alt="" className='w-36 h-36 object-fill' />
            <h1 className='text-xl font-medium'>{name}</h1>
            <p className='text-slate-700'>{position}</p>
            <p className='text-slate-700 text-center' >{education}</p>
        </div>
    );

    return (
        <div>
            <div className='w-[100%] mb-8'>
                <div className='w-[100%] h-20 bg-Dblue text-white flex flex-col justify-center items-center'>
                    <i className='text-xl'>Department of</i>
                    <h1 className='text-3xl font-semibold'>Computer Engineering</h1>
                </div>
                <div className='w-[100%] flex gap-16 mt-8 flex-wrap justify-center '>
                    {card('/teacher1.png', 'R. M. Bora', 'Assistant Professor', 'B.E. (Computer) M.E. (Computer)')}
                    {card('/teacher2.png', 'Prof. (Dr.) S. Kamlapurkar', 'Professor ', 'B.E. (Computer) M.E. (Computer Engineering)')}
                    {card('/teacher3.png', 'Ms. P.P. Vaidya', 'Assistant Professor ', 'B.E. (Computer),PhD Pursuing')}
                    {card('/teacher4.png', 'Dr. S.S. Banait', 'Assistant Professor ', 'B.E. (Computer) PhD(Computer Engineering)')}
                    {card('/teacher5.png', 'Pro. I. Priyadarshini', 'Assistant Professor ', 'B.E. (Computer) PhD(Computer Engineering)')}
                    {card('/teacher6.png', 'Ms. M.P. Mahajan', 'Assistant Professor', 'M.E. (Computer) PhD Pursuing')}

                </div>
            </div>
            <div className='w-[100%] mb-8'>
                <div className='w-[100%] h-20 bg-Dblue text-white flex flex-col justify-center items-center'>
                    <i className='text-xl'>Department of</i>
                    <h1 className='text-3xl font-semibold'>Computer Engineering</h1>
                </div>
                <div className='w-[100%] flex gap-16 mt-8 flex-wrap justify-center '>
                    {card('/teacher7.png', 'Dr. S. S. Sane', 'Professor, HOD', 'PhD (Computer Engineering COEP)')}
                    {card('/teacher8.png', 'Ms  D. K. Sawant', ' Assistant Professor','ME(CSE) PhD(CSE)')}
                    {card('/teacher9.png', 'Ms. S.V. Nirgide', 'Assistant Professor ', 'M.Tech (Computer Science and Engineering)')}
                    {card('/teacher10.png', 'Ms. S. N. Jadhav ', 'Assistant Professor ', 'M.E. (Computer)')}
                    {card('/teacher11.png', 'Ms. N.D. Ghuse', 'Assistant Professor ', 'M.E (CSE)')}
                </div>
            </div>
            <div className='w-[100%] mb-8'>
                <div className='w-[100%] h-20 bg-Dblue text-white flex flex-col justify-center items-center'>
                    <i className='text-xl'>Department of</i>
                    <h1 className='text-3xl font-semibold'>Computer Engineering</h1>
                </div>
                <div className='w-[100%] flex gap-16 mt-8 flex-wrap justify-center '>
                    {card('/teacher7.png', 'Dr. S. S. Sane', 'Professor, HOD', 'PhD (Computer Engineering COEP)')}
                    {card('/teacher12.png', 'Dr. J. S. Hase', ' Assistant Professor','ME(CSE) PhD(CSE)')}
                    {card('/teacher13.png', 'Ms. Indu Sethanathan', 'Assistant Professor ', 'M.Tech (Computer Science)')}
                    {card('/teacher14.png', 'Mr. Y.P. Bhandari', 'Assistant Professor ', 'M.E. Computer')}
                    {card('/teacher15.png', 'Ms. J.A. Kandeakar', 'Assistant Professor ', 'M.E. CSE')}
                </div>
            </div>
        </div>
    )
}
