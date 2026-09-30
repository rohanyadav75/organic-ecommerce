import React from 'react'
import { abt, abthero } from '../assest/images/img'
import Button from '../component/common/Button'
import about from '../data/Home/shop'
import Aboutcard from '../component/common/Aboutcard'
import Buttonsec from '../component/common/Buttonsec'
import aboutContent from '../data/About/data'

const { hero, story, mission, values, impact, journal, blog } = aboutContent

const About = () => {
    return (
        <>

            {/* ------------ Hero Section ------------ */}

            <div className='relative '>
                <img className='h-100 object-cover md:w-full md:h-screen ' src={abthero} alt="" />
                <div className='absolute p-5 content-center mt-10 md:px-20 grid items-center  gap-2 md: inset-0 bg-[rgba(22,67,51,0.85)]   '>
                    <p className='text-[12px] md:txt-secondary text-3 color-third uppercase '>{hero.eyebrow}</p>
                    <h1 className='text-[30px]  mt-3 md:mt-0 reltive txt-primary md:text-6xl color-third'>
                        {hero.stitle} <span className='color-fourth'>{hero.highlight}</span><br /> {hero.etitle}
                    </h1>
                    <p className=' md:txt-secondary w-100 color-third mb-5'>Small-batch, plant-powered soap bars crafted <br /> for gentle daily care and lasting lather.</p>
                    <Button />

                </div>
            </div>


            {/* ------------ Our Story ------------ */}
            <div className='grid grid-cols-1 p-5  md:grid-cols-12 mt-10 md:p-20 gap-5'>
                <div className=' col-span-5 '>
                    <div className='grid gap-y-5'>
                        <p className='txt-primary color-secondary text-3'>{story.eyebrow}</p>
                        <h1 className='text-[30px] md:text-6xl txt-primary color-secondary font-bold'>
                            {story.title1}<br />
                            <span className='text-[rgba(67,170,92,0.3)]'>{story.title2}</span>
                        </h1>
                        <p className='md:mt-30'>{story.description}</p>
                    </div>

                </div>
                <div className='col-span-4'>
                    <img className='h-60 rounded-2xl w-full md:rounded-2xl md:h-120 object-cover hover:scale-95 shadow-2xl  transition-transform ' src={abt} alt="" />
                </div>
                <div className='  p-10 w-76 rounded-2xl mt-5 col-span-3 grid md:content-end bg-[rgba(67,170,92,0.12)]  md:p-10 md:mt-0'>

                    <h1 className='text-5xl txt-primary font-bold color-secondary'>{story.statValue}</h1>
                    <p className='mt-3 txt-secondary color-secondary'>{story.statLabel}</p>



                </div>
            </div>


            {/* ------------ OUR MISSION ------------ */}

            <div className=' grid p-10 space-x-0 w-full md:grid-cols-2 items-center justify-items-center bg-[rgba(67,170,92,0.12)] md:p-25 md:space-x-30 mt-10 '>
                <div className='txt-primary text-secondary '>
                    <p className='uppercase text-3 '>{mission.eyebrow}</p>
                    <h1 className='text-[30px] md:text-4xl mt-5 leading-tight'>{mission.title}</h1>
                </div>
                <div className='text-2 txt-secondary'>
                    <p className='pt-2 text-[rgba(22,67,51,0.4)] mb-5 font-medium color-secondary'>{mission.description}
                    </p>
                    <Buttonsec />
                </div>
            </div>


            {/* ------------ OUR VALUE ------------ */}

            <div className='grid grid-cols-1 px-8 mt-15 md:grid-cols-2 items-center gap-30 md:justify-items-center md:mt-20 '>
                <div className='txt-primary text-secondary '>
                    <p className='uppercase text-3'>Our Value</p>
                    <h1 className='text-[30px] mt-2 md:text-5xl leading-tight'>The way we work.</h1>
                </div>
                <div className=' hidden md:block text-2 txt-secondary  '>
                    <p className='text-[rgba(22,67,51,0.7)]  '>{values.description}
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-1 mt-5 border-t-0 md:grid-cols-3 md:content-start md:border-t border-[rgba(22,67,51,0.1)] md:mt-20 ' >
                {values.items.map((item) => (
                    <div className=' flex p-10 gap-5 border-1 md:grid md:border-0 md:border-r-1 border-[rgba(22,67,51,0.1)]'>
                        <p className='font-bold md:font-normal text-secondary'>{item.number}</p>
                        <h1 className='mt-0 text-[15px] font-bold md:mt-25 md:text-[30px] txt-primary text-secondary md:font-medium'>{item.title}</h1>
                        <p className='text-secondary hidden md:block'>{item.text}</p>
                    </div>
                ))}

            </div>

            {/* ------------ Our Impact ------------ */}


            <div className='grid p-5 md:grid-cols-2 md:p-20 text-third  items-center justify-items-center  mt-20 bg-secondary'>
                <div className='txt-primary  '>
                    <p className='uppercase text-3 text-fourth'>{impact.eyebrow}</p>
                    <h1 className=' text-3xl md:text-5xl mt-5 leading-tight'>{impact.title}</h1>
                </div>

                <div className=' md:text-2 txt-primary '>
                    <div className='mt-5 grid grid-cols-2 gap-10 justify-center items-center md:grid-cols-2 md:gap-50'>
                        <div className='border-r-1 md:border-r-0 md:border-l-1 border-third p-5'>
                            <h1 className='text font-bold'>24K</h1>
                            <p className='text-3'>trees supported</p>
                        </div>

                        <div className=' md:border-l-1 border-third p-5'>
                            <h1 className='text font-bold'>38</h1>
                            <p className='text-3'>Maker Partner</p>
                        </div>
                    </div>

                    <div className='border-t-1  md:border-t-0  grid grid-cols-2 gap-10  items-center justify-center md:grid-cols-2 md:gap-50'>
                        <div className='border-r-1 md:border-r-0 md:border-l-1 border-third p-5'>
                            <h1 className='text font-bold'>1</h1>
                            <p className='text-3'>Shared Planet</p>
                        </div>

                        <div className='md:border-l-1 border-third p-5'>
                            <h1 className='text font-bold'>92%</h1>
                            <p className='text-3'>reusable packing</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* ------------ Our Blog ------------ */}

            <div className='grid grid-cols-1 mt-5 p-5 justify-items-start md:grid-cols-2 items-center md:justify-items-center md:mt-20'>
                <div className='txt-primary text-secondary '>
                    <p className='uppercase text-3'>Our Blog</p>
                    <h1 className='text-[30px] md:text-5xl  '>The way we work.</h1>
                </div>
                <div className='px-0 md:text-2 txt-secondary  md:px-30'>
                    <Buttonsec />
                </div>
            </div>

            <div className='grid p-5 gap-5 md:grid-cols-3 items-center md:gap-20 md:p-20 '>

                {about.slice(1, 4).map((data) => (
                    <div>
                        <Aboutcard image={data.image} />
                        <div className='txt-primary mt-5  '>
                            <p className='font-bold text-secondary text-3'>{data.title}</p>
                            <p>{data.description}</p>
                        </div>


                    </div>


                ))}

            </div>



        </>
    )
}

export default About
