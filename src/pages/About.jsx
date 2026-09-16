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
                <img className='w-full h-screen object-cover' src={abthero} alt="" />
                <div className='absolute  inset-0 bg-[rgba(22,67,51,0.85)] grid justify-start content-center gap-5 px-20'>
                    <p className='txt-secondary text-3 color-third uppercase px-5'>{hero.eyebrow}</p>
                    <h1 className='reltive txt-primary text-6xl color-third'>
                        {hero.stitle} <span className='color-fourth'>{hero.highlight}</span><br /> {hero.etitle}
                    </h1>
                    <p className='txt-secondary w-100 color-third'>{hero.description}</p>
                    <Button />

                </div>
            </div>


            {/* ------------ Our Story ------------ */}
            <div className=' grid grid-cols-12 mt-10 p-20 gap-5'>
                <div className='col-span-5 '>
                    <div className='grid gap-y-5'>
                        <p className='txt-primary color-secondary text-3'>{story.eyebrow}</p>
                        <h1 className='text-6xl txt-primary color-secondary font-bold'>
                            {story.title1}<br />
                            <span className='text-[rgba(67,170,92,0.3)]'>{story.title2}</span>
                        </h1>
                        <p className='mt-30'>{story.description}</p>
                    </div>

                </div>
                <div className='col-span-4'>
                    <img className='rounded-2xl h-120 object-cover hover:scale-95 shadow-2xl  transition-transform ' src={abt} alt="" />
                </div>
                <div className='col-span-3 grid content-end bg-[rgba(67,170,92,0.12)] p-10'>

                    <h1 className='text-5xl txt-primary font-bold color-secondary'>{story.statValue}</h1>
                    <p className='mt-3 txt-secondary color-secondary'>{story.statLabel}</p>



                </div>
            </div>


            {/* ------------ Why Choose Us ------------ */}

            <div className=' grid grid-cols-2 items-center justify-items-center bg-[rgba(67,170,92,0.12)] p-25 space-x-30 mt-10 '>
                <div className='txt-primary text-secondary '>
                    <p className='uppercase text-3 '>{mission.eyebrow}</p>
                    <h1 className='text-4xl mt-5 leading-tight'>{mission.title}</h1>
                </div>
                <div className='text-2 txt-secondary'>
                    <p className='text-[rgba(22,67,51,0.4)] mb-5 font-medium color-secondary'>{mission.description}
                    </p>
                    <Buttonsec />
                </div>
            </div>


            {/* ------------ Our Value ------------ */}

            <div className='grid md:grid grid-cols-2 items-center gap-30 justify-items-center mt-20 '>
                <div className='txt-primary text-secondary '>
                    <p className='uppercase text-3'>Our Value</p>
                    <h1 className='text-5xl leading-tight'>The way we work.</h1>
                </div>
                <div className='text-2 txt-secondary  '>
                    <p className='text-[rgba(22,67,51,0.7)]  '>{values.description}
                    </p>
                </div>
            </div>

            <div className='grid md:grid grid-cols-3 content-start border-t border-[rgba(22,67,51,0.1)] mt-20 ' >
                {values.items.map((item) => (
                    <div  className='p-10 border-r-1 border-[rgba(22,67,51,0.1)]'>
                        <p>{item.number}</p>
                        <h1 className='mt-25 text txt-primary text-secondary font-medium'>{item.title}</h1>
                        <p className='text-secondary'>{item.text}</p>
                    </div>
                ))}

            </div>

            {/* ------------ Our Impact ------------ */}


            <div className='grid md:grid grid-cols-2 p-20 text-third  items-center justify-items-center  mt-20 bg-secondary'>
                <div className='txt-primary  '>
                    <p className='uppercase text-3 text-fourth'>{impact.eyebrow}</p>
                    <h1 className=' md:text-5xl mt-5 leading-tight'>{impact.title}</h1>
                </div>


                <div className=' md:text-2 txt-primary '>
                    <div className='md:grid grid-cols-2 gap-50'>
                        <div className='border-l-1 border-third p-5'>
                            <h1 className='text font-bold'>24K</h1>
                            <p className='text-3'>trees supported</p>
                        </div>

                        <div className='border-l-1 border-third p-5'>
                            <h1 className='text font-bold'>38</h1>
                            <p className='text-3'>Maker Partner</p>
                        </div>
                    </div>


                    <div className='md:grid grid-cols-2 gap-50 mt-10'>
                        <div className='border-l-1 border-third p-5'>
                            <h1 className='text font-bold'>1</h1>
                            <p className='text-3'>Shared Planet</p>
                        </div>

                        <div className='border-l-1 border-third p-5'>
                            <h1 className='text font-bold'>92%</h1>
                            <p className='text-3'>reusable packing</p>
                        </div>
                    </div>



                </div>
            </div>

            {/* ------------ Our Blog ------------ */}

            <div className='grid md:grid grid-cols-2  items-center  justify-items-center mt-20'>
                <div className='txt-primary text-secondary '>
                    <p className='uppercase text-3'>Our Blog</p>
                    <h1 className='text-5xl  leading-tight'>The way we work.</h1>
                </div>
                <div className='text-2 txt-secondary  px-30'>
                    <Buttonsec />
                </div>
            </div>

            <div className='grid grid-cols-3 items-center gap-20 p-20 '>

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
