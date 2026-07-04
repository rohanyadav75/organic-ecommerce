import React from 'react'
const Card = ({ image, date, category, title }) => {
    return (
        <div>
            {/* <div className="rounded-lg "> */}
            <img src={image} className="w-full h-60 object-cover rounded-lg " />

            <div className="mt-4 text-center">
                <div className="  text-gray-400 text-sm p-2">
                    <span>{date}</span>

                    <span className="bg-gray-800 text-gray-200 px-3 ml-2 py-1 rounded-full text-xs">
                        {category}
                    </span>
                </div>

                <p className="text-gray-400 text-sm">{title}</p>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Card
