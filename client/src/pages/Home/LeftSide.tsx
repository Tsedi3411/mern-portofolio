import React from 'react'

function LeftSide() {
  return (
    
  <div className="fixed left-0 bottom-0 px-10 sm:static">
     <div className="flex flex-col items-center">
     <div className=" flex flex-col gap-3 sm:flex-row">      
      <a href="https://www.google.com/"> 
      {" "}
      <i className="ri-facebook-circle-line text-gray-500"></i></a>
      <i className="ri-mail-add-line text-gray-500"></i>
      <i className="ri-instagram-line text-gray-500"></i>
      <i className="ri-linkedin-box-fill text-gray-500"></i>
      <i className="ri-github-fill text-gray-500"></i>
    </div>
    <div className='w-[1px] h-52 bg-[#272162] sm:hidden'>
    </div>
     </div> 
  </div>
  )
}

export default LeftSide