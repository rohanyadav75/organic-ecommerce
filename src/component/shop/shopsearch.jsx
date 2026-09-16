import React from 'react'

const Shopsearch = ({
    search,
    setSearch,
    category,
    setCategory,
    ingredient,
    setIngredient,
    skintypes,
    setSkintypes,
}) => {
    return (
        <div className="w-full">
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

            <div className="flex flex-wrap gap-2 mt-3">
                {category !== "All" && (
                    <div className="flex items-center gap-3 border border-gray-400 rounded-full px-4 py-2 text-sm">
                        <span>{category}</span>

                        <button
                            onClick={() => setCategory("All")}
                            className="text-gray-500 text-xl leading-none hover:cursor-pointer"
                        >
                            ×
                        </button>
                    </div>
                )}

                {ingredient !== "All" && (
                    <div className="flex items-center gap-3 border border-gray-400 rounded-full px-4 py-2 text-sm">
                        <span>{ingredient}</span>

                        <button
                            onClick={() => setIngredient("All")}
                            className="text-gray-500 text-xl leading-none hover:cursor-pointer"
                        >
                            ×
                        </button>
                    </div>
                )}

                {skintypes !== "All" && (
                    <div className="flex items-center gap-3 border border-gray-400 rounded-full px-4 py-2 text-sm">
                        <span>{skintypes}</span>

                        <button
                            onClick={() => setSkintypes("All")}
                            className="text-gray-500 text-xl leading-none hover:cursor-pointer"
                        >
                            ×
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Shopsearch
