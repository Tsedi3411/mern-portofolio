import React from 'react'
import SectionTitle from '../../component/SectionTitle'
import { projects } from '../../resources/projects'

function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
        <SectionTitle title="Projects"/>
        <div className="flex py-10 gap-20 sm:flex-col">
                <div className="flex flex-col gap-10 border-l-4 border-[#b3d0d5cc] w-1/3 sm:flex-row sm:overflow-x-scroll 
                 sm:w-full">
                    {projects.map((project, index) => (
                        <div onClick={() => {

                            setSelectedItemIndex(index);
                        }}
                            className='cursor-pointer'
                        >
                            <h1 className={`text-xl px-5
                                 ${selectedItemIndex === index
                                    ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#406767] py-3 px-5 sm:w-full'
                                    : 'text-white'}`}>

                                {project.title}
                            </h1>

                        </div>

                    ))}
                </div>
                
                <div className='flex item-center justify-center gap-10 sm:flex-col'>
                 <img src={projects[selectedItemIndex].image} alt="Something About the project" className='h-60 w-72'/>
                   <div className='flex flex-col gap-5'>
                    <h1 className="text-secondary text-xl">{projects[selectedItemIndex].title}</h1>
                    <p className="text-white">{projects[selectedItemIndex].description}</p>
                    {/* <h1 className="text-tertiary text-xl">{projects[selectedItemIndex].company}</h1> */}
                    <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit perferendis iure,
                         corporis eligendi, accusantium dicta harum amet dignissimos asperiores magnam labore
                          voluptate vitae facilis voluptas deserunt quidem est sed tempora.</p>
                   </div>
                </div>

            </div>
    </div>
  )
}

export default Projects