import React from 'react'
import { abt, abthero, project } from '../assest/images/img'
import Button from '../component/common/Button'
import about from '../data/Home/shop'
import Aboutcard from '../component/common/Aboutcard'
import Buttonsec from '../component/common/Buttonsec'
const About = () => {
    return (
        <>


            {/* ------------ Hero Section ------------ */}


            <div className='relative '>
                <img className='w-full h-screen object-cover' src={abthero} alt="" />
                <div className='absolute  inset-0 bg-secondary/85 grid justify-start content-center gap-5 px-20'>
                    <p className='txt-secondary text-3 color-third uppercase px-5'>About Us</p>
                    <h1 className='reltive txt-primary text-6xl color-third'>
                        A little more <span className='color-fourth'>wonder</span><br /> in the everyday.
                    </h1>
                    <p className='txt-secondary color-third'>Agriculture is the backbone of our society, providing food, materials, <br /> and economic stability. As the world population grows,
                        the need for sustainable <br /> farming practices has never been more critical.</p>
                    <Button />

                </div>
            </div>


            {/* ------------ Our Story ------------ */}
            <div className=' grid grid-cols-12 mt-10 p-20 gap-5'>
                <div className='col-span-5 '>
                    <div className='grid gap-y-5'>
                        <p className='txt-primary color-secondary text-3'>Our Story</p>
                        <h1 className='text-6xl txt-primary color-secondary font-bold'>Made with care.<br /> <span className='text-primary/30'>Meant to be shared.</span></h1>
                        <p className='mt-30'>Agriculture is the backbone of our society, providing <br />
                            and economic stability. As the world population grows, <br /> the need for sustainable
                            farming practices has never been<br /> more critical.</p>
                    </div>

                </div>
                <div className='col-span-4'>
                    <img className='rounded-2xl h-120 object-cover hover:scale-95 shadow-2xl  transition-transform ' src={abt} alt="" />
                </div>
                <div className='col-span-3 grid content-end bg-primary/12 p-10'>

                    <h1 className='text-5xl txt-primary font-bold color-secondary'>12</h1>
                    <p className='mt-3 txt-secondary color-secondary'>Agriculture is the backbone of our society, providing
                        and economic stability. As the world population grows,
                        the need for sustainable farming practices has never been
                        more critical.
                    </p>



                </div>
            </div>


            {/* ------------ Why Choose Us ------------ */}

            <div className=' grid grid-cols-2 items-center justify-items-center bg-primary/12 p-25 space-x-30 mt-10 '>
                <div className='txt-primary text-secondary '>
                    <p className='uppercase text-3 '>Why We Exist</p>
                    <h1 className='text-4xl mt-5 leading-tight'>The everyday is worth<br />paying attention to</h1>
                </div>
                <div className='text-2 txt-secondary'>
                    <p className='text-secondary/40 mb-5 font-medium color-secondary'>Agriculture is the backbone of our society, providing and economic stability.
                        As the world population grows, the need for sustainable farming practices has never been more critical.
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
                    <p className='text-secondary/70  '>Agriculture is the backbone of our society,<br/> providing and economic stability.
                    </p>
                </div>
            </div>

            <div className='grid md:grid grid-cols-3  content-start border-t border-secondary/10 mt-20 ' >
                <div className='p-10 border-r-1 border-secondary/10'>
                    <p>01</p>
                    <h1 className='mt-25 text txt-primary text-secondary font-medium'>Stay Curious</h1>
                    <p className='text-secondary'>Agriculture is the backbone of our society,<br /> providing and economic stability.</p>
                </div>


                <div className='p-10 border-r-1 border-secondary/10'>
                    <p>02</p>
                    <h1 className='mt-25 text txt-primary text-secondary font-medium'>Stay Curious</h1>
                    <p className='text-secondary'>Agriculture is the backbone of our society,<br /> providing and economic stability.</p>
                </div>


                <div className='p-10 '>
                    <p>03</p>
                    <h1 className='mt-25 text txt-primary text-secondary font-medium'>Stay Curious</h1>
                    <p className='text-secondary'>Agriculture is the backbone of our society,<br /> providing and economic stability.</p>
                </div>

            </div>

            {/* ------------ Our Impact ------------ */}


            <div className='grid md:grid grid-cols-2 p-20 text-third  items-center justify-items-center  mt-20 bg-secondary'>
                <div className='txt-primary  '>
                    <p className='uppercase text-3 text-fourth'>Our Impact</p>
                    <h1 className=' md:text-5xl mt-5 leading-tight'>The way we work.<br />Good for the day.</h1>
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
