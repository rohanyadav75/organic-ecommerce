import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { project } from '../../assest/images/img'

const Homeimage = () => {
    const title = 'Organic from Farm to Table'
    const [displayedTitle, setDisplayedTitle] = useState('')
    const smallCopy = 'Naturally fresh and simply healthy.'

    useEffect(() => {
        let index = 0
        let timeoutId

        const tick = () => {
            setDisplayedTitle(title.slice(0, index + 1))
            index += 1
            if (index <= title.length) {
                timeoutId = setTimeout(tick, 80)
            } else {
                timeoutId = setTimeout(() => {
                    setDisplayedTitle('')
                    index = 0
                    tick()
                }, 1600)
            }
        }

        tick()
        return () => clearTimeout(timeoutId)
    }, [title])

    return (
        <div className='mt-30 w-full h-[520px]'>
            <div className='relative w-full h-full'>
                <div
                    className='absolute inset-0 bg-cover bg-center'
                    style={{ backgroundImage: `url(${project})` }}
                />
                <div className='absolute inset-0 bg-black/60' />
                <div className='relative z-10 flex flex-col items-center justify-center h-full px-6 text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.1, ease: 'easeOut' }}
                        className='max-w-4xl'
                    >
                        <motion.h1
                            className='text-white text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-semibold tracking-tight leading-[1.02] whitespace-nowrap'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.15 }}
                        >
                            <span>{displayedTitle}</span>
                            <motion.span
                                className='ml-2 inline-block h-[1.1em] w-1 rounded bg-white'
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut', repeatDelay: 0.2 }}
                            />
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut', delay: 1.5 }}
                            className='mt-4 text-white/70 text-sm md:text-base max-w-2xl mx-auto'
                        >
                            {smallCopy}
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Homeimage
