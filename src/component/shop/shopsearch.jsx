import React from 'react'

const Shopsearch = ({ search, setSearch }) => {
    return (
        <div className="lg:col-span-3 ">
            <div>
                <div className="relative">
                    <input
                        type="text"
                        value={search}
                        placeholder='Search Product'
                        onChange={(e) => setSearch(e.target.value)}
                        className='border-1 rounded-2xl p-2 pr-10 w-full'
                    />

                    {search && (
                        <button
                            onClick={() => setSearch("")}
                            aria-label="Clear search"
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-xl leading-none text-gray-600 hover:text-gray-900 p-1 rounded-full bg-transparent"
                        >
                            ×
                        </button>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Shopsearch
