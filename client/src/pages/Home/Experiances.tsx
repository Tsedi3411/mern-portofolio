import React from 'react'
import SectionTitle from '../../component/SectionTitle'
import { experiances } from '../../resources/Experiance'

function Experiances() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    return (
        <div>
            <SectionTitle title="Experiance" />

            <div className="flex py-10 gap-20 sm:flex-col">
                <div className="flex flex-col gap-10 border-l-4 border-[#b3d0d5cc] w-1/3 sm:flex-row sm:overflow-x-scroll 
                 sm:w-full">
                    {experiances.map((experiance, index) => (
                        <div onClick={() => {

                            setSelectedItemIndex(index);
                        }}
                            className='cursor-pointer'
                        >
                            <h1 className={`text-xl px-5
                                 ${selectedItemIndex === index
                                    ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#436868] py-3 px-5 sm:w-full'
                                    : 'text-white'}`}>

                                {experiance.Period}
                            </h1>

                        </div>

                    ))}
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className="text-secondary text-xl">{experiances[selectedItemIndex].Title}</h1>
                    <h1 className="text-tertiary text-xl">{experiances[selectedItemIndex].company}</h1>
                    <p className='text-white'>{experiances[selectedItemIndex].Description}</p>
                </div>

            </div>
        </div>
    )
}

export default Experiances