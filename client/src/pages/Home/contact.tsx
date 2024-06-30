import React from 'react'
import SectionTitle from '../../component/SectionTitle'

function Contact() {
    const user={
        name:"Tsedenya Alebel",
        age:"25",
        gender:"femal",
        email:"tsedi3411@gmail.com",
        phoneNo:"0934668606",
        Country:"Addis Ababa, Ethiopia"
    }
  return (
    <div>
        <SectionTitle title="Say Hello" />
        <div className="flex sm:flex-col items-center justify-between">
            <div className="flex flex-col gap-1">
            <p className="text-tertiary text-sm">{'{'}</p>
            {Object.keys(user).map((key) => (
             <h1 key={key} className="ml-5 text-sm">
                 <span className='text-tertiary m-2'>{key}:</span>
               <span className='text-tertiary'>{user[key]}</span>
               </h1>
           ))}
            <p className="text-tertiary">{"}"}</p>
        </div>
        <div>
            <img src="ty.png" alt="my Image" />
        </div>
        </div>
    </div>
  )
}

export default Contact