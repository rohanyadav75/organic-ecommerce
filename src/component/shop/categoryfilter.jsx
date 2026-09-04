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

                    <button onClick={() => setCategory("Neem")} className='border'>Neem</button>
                    <button onClick={() => setCategory("Alovera")} className='border'>Alovera</button>
                    <button onClick={() => setCategory("Tulsi")} className='border'>Tulsi</button>
                    {/* <button onClick={() => setCategory("Pulses")} className='border'>Pulses</button> */}

                </div>
            </div>
        </>

    )
}

export default categoryfilter
