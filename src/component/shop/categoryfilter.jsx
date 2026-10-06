import React from 'react'
import data from '../../data/Shop/data'

const Categoryfilter = ({
    category,
    setCategory,
    ingredient,
    setIngredient,
    skintypes,
    setSkintypes,
    price,
    setPrice,
    maxPrice
}) => {

    // Get all ingredients
    const ingredients = [...new Set(data.flatMap((item) => item.mainIngredient || []))]


    // Get all categories
    const maincategory = [...new Set(data.flatMap((item) => item.category || []))]


    // Get all skintype
    const skintype = [...new Set(data.flatMap((item) => item.skinType || []))]


    return (

        <div className=' p-2  md:bg-transparent  w-100 md:w-auto'>


            <h1 className='border-black/10 color-secondary font-bold pb-2 border-b txt-primary text-[14px] '>
                Categories:
            </h1>

            {/* CATEGORY */}

            <div className='flex color-secondary flex-col mt-5 text-[12px] gap-5 txt-primary'>

                {maincategory.map((item) => (

                    <label
                        key={item}
                        className='flex color-secondary items-center gap-2'
                    >

                        <input
                            type="checkbox"
                            checked={category === item}
                            onChange={(e) =>
                                setCategory(
                                    e.target.checked
                                        ? item
                                        : "All"
                                )
                            }
                            className="filter-checkbox"
                        />

                        <span>{item}</span>

                    </label>

                ))}

            </div>

            {/* INGREDIENT */}

            <h1 className='border-black/10 color-secondary font-bold pb-2 border-b txt-primary text-[14px]  mt-5'> Ingredients: </h1>

            <div className='flex color-secondary flex-col mt-5 text-[12px] gap-3 txt-primary'>
                {ingredients.slice(0, 5).map((item) => (
                    <label key={item} className='flex items-center gap-2'>
                        <input type="checkbox" checked={ingredient === item} onChange={(e) => setIngredient(e.target.checked ? item : "All")} className="filter-checkbox" />
                        <span >{item}</span>
                    </label>

                ))}

            </div>

            {/* SKIN TYPE */}

            <h1 className='border-black/10 color-secondary font-bold pb-2 border-b txt-primary text-[14px]  mt-5'> Skin Type: </h1>

            <div className='flex color-secondary flex-col mt-5 text-[12px] gap-3 txt-primary'>
                {skintype.map((item) => (
                    <label key={item} className='flex items-center gap-2'>
                        <input type="checkbox" checked={skintypes === item} onChange={(e) => setSkintypes(e.target.checked ? item : "All")} className="filter-checkbox" />
                        <span>{item}</span>
                    </label>

                ))}

            </div>



            {/* PRICE */}

            <h1 className='border-black/10 color-secondary font-bold pb-2 border-b txt-primary text-[14px]  mt-5'>Price:</h1>

            <div className='mt-5 '>
                {/* <p className='text-sm text-gray-700'>Up to ₹{price}</p> */}

                <input
                    type='range'
                    min='239'
                    max={maxPrice}
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className='mt-3 w-full accent-secondary '
                />

                <div className='mt-2 color-secondary flex items-center justify-between text-xs text-gray-500'>
                    <span>₹239</span>
                    <span>₹{maxPrice}</span>
                </div>
            </div>


        </div>
    )
}

export default Categoryfilter