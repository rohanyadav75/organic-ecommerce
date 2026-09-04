import React from 'react'
import './Homecategory.css'
import { abt, abthero } from '../../assest/images/img'

const Homecategory = () => {
    return (
        <div>
            <div className='p-10 grid grid-cols-5 items-center  justify-items-center divide-y-1 divide-secondary/12 shadow-md'>
                <img className='catimg' src={abthero} alt="" />
                <img className='catimg' src={abt} alt="" />
                <img className='catimg' src={abthero} alt="" />
                <img className='catimg' src={abt} alt="" />
                <img className='catimg' src={abthero} alt="" />


            </div>
        </div>
    )
}

export default Homecategory



// import React from 'react'
// import { motion } from 'framer-motion'
// import { WheatIcon } from '../../assest/icons/icon';
// import { RoughNotation } from 'react-rough-notation';
// import Homeservicedata from '../../data/Homeservicedata';
// import TiltImageCard from '../common/TiltImageCard';

// const Homecategory = () => {
//     return (
//         <>

//             <div className="  text-center justify-center items-center p-8">

//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, ease: 'easeOut' }}
//                     className="flex flex-col items-center gap-4"
//                 >
//                     <div className="flex justify-center items-center gap-2">
//                         <h3 className='text-green-700 text-[15px] '>Browse</h3>
//                         <WheatIcon className='color-fourth rotate-90 text-4xl' />
//                     </div>

//                     <h1 className='text-[18px] font-secondary color-secondary font-[600] '>
//                         Shop By {''}
//                         <RoughNotation
//                             type="underline"
//                             show={true}
//                             color="#F8C32C"
//                             strokeWidth={1}
//                             animationDuration={3000}
//                         > Category</RoughNotation>
//                     </h1>

//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.3, duration: 0.7 }}
//                         className="text-sm text-gray-600 max-w-xl"
//                     >
//                         Discover organic categories curated for fresh, natural, and sustainable living.
//                     </motion.p>
//                 </motion.div>

//             </div>
//             <div className="grid md:grid-cols-3 gap-8 mt-3 max-w-6xl mx-auto">
//                 {Homeservicedata.map((post, index) => (

//                     <div key={index} className=" rounded-lg overflow-hidden">

//                         <TiltImageCard src={post.image} alt={post.title} title={post.title} />

//                         <div className="mt-4">
//                             <div className="flex items-center justify-center gap-2 font-primary text-black text-md mb-2">
//                                 {/* <span className='text-center'>{post.title}</span> */}
//                                 {/* <span className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-xs">
//                                     {post.category}
//                                 </span> */}
//                             </div>

//                             {/* <p className="text-gray-400 text-sm">{post.title}</p> */}

//                         </div>
//                     </div>



//                 ))}
//             </div>
//         </>
//     )
// }

// export default Homecategory
