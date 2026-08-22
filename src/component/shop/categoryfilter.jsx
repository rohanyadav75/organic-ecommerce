import { style } from 'framer-motion/client'
import React from 'react'

const categoryfilter = ({ category, setCategory }) => {
    return (
        <>
            <style>{`
        .border {
          border: 1px solid;
          width:100%;
          padding: 8px;
        }
      `}</style>
            <div className='p-5'>
                <h1>Categoies:</h1>
                <div className='flex flex-col mt-5 text-[12px] txt-secondary  items-start gap-5 justify-evenly'>

                    <button onClick={() => setCategory("All")} className='border'>All</button>

                    <button onClick={() => setCategory("Rice")} className='border'>Rice</button>
                    <button onClick={() => setCategory("Wheat")} className='border'>Wheat</button>
                    <button onClick={() => setCategory("Maize")} className='border'>Maize</button>
                    <button onClick={() => setCategory("Pulses")} className='border'>Pulses</button>

                </div>
            </div>
        </>

    )
}

export default categoryfilter
