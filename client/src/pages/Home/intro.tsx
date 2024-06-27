import React from 'react'

function Intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
      <h1 className='text-white'>Hi , I am</h1>
      <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>Tsedenya Alebel</h1>
      <h1 className='text-white font-semibold text-6xl sm:text-3xl'>I build the thing for my Profile</h1>
      <p className="text-white w-2/3"> I am an Instructor , currently I am studing Software Engineering (msc) at AAu </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">Get Started</button>

    </div>
  )
}

export default Intro