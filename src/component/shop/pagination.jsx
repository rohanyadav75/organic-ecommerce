import React from 'react'

const pagination = ({ page, setPage, totalPages }) => {
    return (
        <div>
            <div className='flex justify-center my-5 items-center gap-5'>
                {[1, 2, 3, 4, 5].slice(0, totalPages).map((pageNumber) => (
                    <button
                        key={pageNumber}
                        className={`border-1 rounded-full text-3 w-5 h-5 flex items-center justify-center hover:cursor-pointer ${
                            page === pageNumber
                                ? 'bg-secondary text-white'
                                : 'txt-secondary bg-white hover:bg-secondary hover:text-white'
                        }`}
                        onClick={() => setPage(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default pagination
