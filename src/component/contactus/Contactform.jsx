import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FiSend } from 'react-icons/fi'
import { MdOutlineEmail, MdOutlinePhoneInTalk, MdOutlineWatchLater } from 'react-icons/md'

const Contactform = () => {
    return (
        <div>
            <div className='sm:grid  md:grid grid-cols-2 items-center px-30 mt-10 justify-items-center'>
                {/* Send Message */}
                <div className='rounded-2xl w-[100%] p-10 bg-primary/12'>
                    <h1 className='text-secondary font-bold text-[22px] txt-primary'>Send us a message</h1>
                    <p className='text-3 txt-secondary mt-2'>Fill out the form below and we'll get back to you <br />
                        as soon as possible</p>
                    <div className='space-x-3 '>
                        <input type="text" placeholder='Enter Your Name' className='bg-white p-3 mt-5 text-3 w-[48%] rounded-[8px]' />
                        <input type="email" placeholder='Enter Your E-mail' className='bg-white p-3 mt-5 text-3 w-[48%] rounded-[8px]' />
                    </div>
                    <input type="phone" placeholder='Enter Your Phone Number' className='bg-white p-3 mt-5 text-3 w-full  rounded-[8px]' />
                    <input type="text" placeholder='Your Subject' className='bg-white p-3 mt-5 text-3 w-full  rounded-[8px]' />
                    <textarea id="" placeholder='Your Message' className='bg-white p-3 mt-5 text-3  h-50 w-full  rounded-[8px]'></textarea>
                    <button className='flex items-center gap-3 mt-5 bg-fourth p-3 px-5 rounded-3xl txt-secondary text-3 text-secondary font-bold'>Send Message <FiSend /></button>



                </div>

                {/*Get in Touch  */}

                <div>
                    <h1 className='text-secondary font-bold text-[22px] txt-primary'>Get in touch</h1>
                    <p className='text-3 txt-secondary mt-2'>Fill out the form below and we'll get back to you <br />
                        as soon as possible</p>
                    <div className="mt-10 flex items-center border-gray-200 border-b space-y-5  gap-5">
                        {/* Location Icon */}
                        <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center">
                            <CiLocationOn className="text-secondary text-3xl" />
                        </div>

                        {/* Location Content */}
                        <div>
                            <h1 className="text-secondary font-bold text-3 leading-tight">
                                Our Location
                            </h1>

                            <p className="text-gray-600 text-3 mt-1">
                                Jaunpur, Uttar Pradesh, India
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 flex items-center border-gray-200 border-b space-y-5 gap-5">
                        {/* Location Icon */}
                        <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center">
                            <MdOutlineEmail className="text-secondary text-3xl" />
                        </div>

                        {/* Location Content */}
                        <div>
                            <h1 className="text-secondary font-bold text-3 leading-tight">
                                Email Us
                            </h1>

                            <p className="text-gray-600 text-3 mt-1">
                                rohan@gmail.com
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 flex items-center border-gray-200 border-b space-y-5 gap-5">
                        {/* Location Icon */}
                        <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center">
                            <MdOutlinePhoneInTalk className="text-secondary text-3xl" />
                        </div>

                        {/* Location Content */}
                        <div>
                            <h1 className="text-secondary font-bold text-3 leading-tight">
                                Call Us
                            </h1>

                            <p className="text-gray-600 text-3 mt-1">
                                +917397XXXXX
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 flex items-center space-y-5 gap-5">
                        {/* Location Icon */}
                        <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center">
                            <MdOutlineWatchLater className="text-secondary text-3xl" />
                        </div>

                        {/* Location Content */}
                        <div>
                            <h1 className="text-secondary font-bold text-3 leading-tight">
                                Business Hours
                            </h1>

                            <p className="text-gray-600 text-3 mt-1">
                                Monday - Friday: 9:00 AM - 5:00 PM <br />
                                Sunday: Closed
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactform
