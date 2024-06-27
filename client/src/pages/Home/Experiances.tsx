import React from 'react'
import SectionTitle from '../../component/SectionTitle'
import { experiances } from '../../resources/Experiance'

function Experiances() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    return (
        <div>
            <SectionTitle title="Experiance" />

            <div className="flex py-10">
                <div className="flex flex-col gap-5 border-l-2 border-[000]">
                    {experiances.map((experiance, index) => (
                        <div onClick={()=>{ 
                            setSelectedItemIndex(index);
                        }}
                        className='cursor-pointer'
                        >
                            <h1 className={`text-xl ${selectedItemIndex === index ? 'text-tertiary border-tertiary' : 'text-white'}`}>{experiance.Period}</h1>

                        </div>

                    ))}
                </div>
                <div>

                </div>

            </div>
        </div>
    )
}

export default Experiances