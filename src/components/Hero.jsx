import React from 'react'
import ButtonCustom from './ButtonCustom'
export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center
        justify-center text-center max-w-[900px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>
                <p>IT'S TIME TO GET</p>
                <h1 className='uppercase font-semi text-5xl sm:text-6xl md:text-7x lg:text8xl'>
                    My <span className='text-blue-400 font-extrabold'>Gym App</span>
                </h1>
            </div>
            <p className='text-sm md:text-base font-light'>
                I hereby acknowledge that I might end up getting
                <span className='text-blue-400 font-medium'> mad swole </span>
                and accept all risks of becoming the local
                <span className='text-blue-400 font-medium'> absolute tank </span>,
                dealing with major body dysmorphia and possibly having to grease myself to squeeze through doors.
            </p>
            <ButtonCustom func={()=>
                window.location.href = '#generate'
            } text={'Accept & Begin'} />
        </div>
    )
}
