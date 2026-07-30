import React from 'react'
import Card from '../common/Card'
import Data from '../../data/Homeblogdata'
import { WheatIcon } from '../../assest/icons/icon';
import { RoughNotation } from 'react-rough-notation';
import Homeservicedata from '../../data/Homeservicedata';


const Homeservice = () => {
    return (
        <>

            <div className=" flex-col  text-center justify-center items-center p-8">
                <div className='mt-25 '>
                    <div className="flex justify-center items-center gap-2">
                        <h3 className='text-green-700 font-bold'>Our services!</h3>
                        <WheatIcon className='color-fourth rotate-90 text-4xl' />
                    </div>
                    <h1 className='text-5xl color-secondary font-bold mt-3 leading-tight'>Delivering Top-Quality <br />
                        Agricultural {''}
                        <RoughNotation
                            type="underline"
                            show={true}
                            color="#F8C32C"
                            strokeWidth={2}
                            animationDuration={3000}
                        > Services!</RoughNotation></h1>
                    <p className='mt-5 text-[18px]'>Agriculture is the backbone of our society, providing food, materials, and economic stability.</p>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
                {Homeservicedata.map((post, index) => (
                    <div key={index} className=" rounded-lg overflow-hidden">
                        <img
                            src={post.image}
                            className="w-full h-60 object-cover rounded-lg"
                        />
                        <div className="mt-4">
                            <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                                <span>{post.date}</span>
                                <span className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-xs">
                                    {post.category}
                                </span>
                            </div>

                            <p className="text-gray-400 text-sm">{post.title}</p>

                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Homeservice
