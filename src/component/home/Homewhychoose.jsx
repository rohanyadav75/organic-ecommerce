import React, { useState } from 'react'
import Homecontent from '../../data/Homecontent'
import CircularGallery from '../react-bits/CircularGallery'
import Button from '../common/Button'
import { RoughNotation } from 'react-rough-notation'
import { about } from '../../assest/images/img'
import TiltImageCard from '../common/TiltImageCard'
import Homeservicedata from '../../data/Homeservicedata'


const accordionItems = [
    {
        title: 'Why choose organic?',
        content: 'Organic farming supports healthy soil, reduces chemicals, and produces nutrient-rich food.',
    },
    {
        title: 'What makes our farm special?',
        content: 'We use sustainable practices, care for local communities, and deliver fresh produce daily.',
    },
    {
        title: 'How do we ensure freshness?',
        content: 'Our produce is harvested at peak ripeness and shipped quickly to preserve flavor and nutrition.',
    },
]

const [featuredService] = Homeservicedata.slice(1, 2)

const Homewhychoose = () => {
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <>



            <div className="grid md:grid-cols-2 md:gap-2 max-w-6xl items-center justify-items-center align-middle mt-30 mx-auto">

                {Homecontent.map((post, index) => (

                    <div key={index} >
                        <h2 className={post.titleClass}>


                            <span className='text'>{post.title}</span><br />
                            <RoughNotation
                                type="underline"
                                show={true}
                                color="#F8C32C"
                                strokeWidth={2}
                                animationDuration={1800}
                            >
                                <span>{post.highlight}</span>
                            </RoughNotation>
                        </h2>

                        <p className={post.descriptionClass}>{post.description}</p>
                        <div className='mt-5'>
                            <Button />

                        </div>

                        {/* accordian */}

                        <div className='w-full max-w-xl mt-10 space-y-3'>
                            {accordionItems.map((item, index) => (
                                <div key={item.title} className='overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm'>
                                    <button
                                        type='button'
                                        onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                        className='flex w-full items-center justify-between px-5 py-4 text-left text-lg font-semibold text-gray-900 transition-colors duration-200 hover:bg-gray-50'
                                    >
                                        <span>{item.title}</span>
                                        <span className={`text-xl transition-transform duration-200 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                                            ▼
                                        </span>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 px-5 pb-5' : 'max-h-0'} `}>
                                        <p className='text-sm leading-6 text-gray-600'>{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>



                    </div>

                ))}


                {featuredService && (
                    <div className="">
                        <TiltImageCard src={about} alt={featuredService.title} imageClassName="h-[350px]" />

                    </div>
                )}



                {/* <div className='relative w-120  rounded-2xl overflow-hidden'>
                    <img className='' src={rohan} alt="" />
                    <div className='absolute inset-0 bg-black/50' />
                </div> */}



            </div>




        </>
    )
}

export default Homewhychoose
