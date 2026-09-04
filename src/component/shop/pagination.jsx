import React from 'react'

const pagination = ({ page, setPage, totalPages }) => {
    return (
        <div >
            <div className='flex justify-center gap-5 '>
                <button className='border-1 my-5 p-1 hover:cursor-pointer txt-secondary text-3' onClick={() => setPage(page - 1)} disabled={page === 1}
                >
                    Previous
                </button>

                <button className='border-1 my-5 p-1 hover:cursor-pointer txt-secondary text-3' onClick={() => setPage(page + 1)} disabled={page === totalPages}
                >
                    Next
                </button>
            </div>

        </div>
    )
}

export default pagination
