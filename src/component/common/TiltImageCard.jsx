import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

// Reusable image card with a 3D tilt effect on hover
const TiltImageCard = ({ src, alt, title, className = '', imageClassName = '' }) => {
    // Track mouse position to rotate the card in 3D
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotateX = useTransform(y, [-100, 100], [16, -16])
    const rotateY = useTransform(x, [-100, 100], [-16, 16])
    const scale = useMotionValue(1)
    const shadow = useMotionValue(0)

    // Update tilt values while the cursor moves over the card
    const handleMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const px = (event.clientX - rect.left) / rect.width - 0.5
        const py = (event.clientY - rect.top) / rect.height - 0.5
        x.set(px * 100)
        y.set(py * 100)
        scale.set(1.05)
        shadow.set(24)
    }

    // Reset the tilt effect when the cursor leaves the card
    const handleLeave = () => {
        x.set(0)
        y.set(0)
        scale.set(1)
        shadow.set(0)
    }

    return (
        <motion.div
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            whileHover={{ scale: 1.05, rotateX: 8, rotateY: -8, y: -6 }}
            whileTap={{ scale: 0.98 }}
            style={{ perspective: 1200, transformStyle: 'preserve-3d', backgroundColor: 'transparent' }}
            className={`rounded-lg overflow-hidden bg-transparent ${className}`}
        >
            <motion.div className="relative bg-transparent">
                <motion.img
                    src={src}
                    alt={alt}
                    className={`block w-full h-[250px] object-cover rounded-lg ${imageClassName}`}
                    style={{
                        rotateX,
                        rotateY,
                        scale,
                        transformPerspective: 1200,
                        boxShadow: `0 12px 28px rgba(0,0,0,0.08)`
                    }}
                    transition={{ type: 'spring', stiffness: 140, damping: 16 }}
                />

                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {title && (
                    <div className="absolute inset-x-0 bottom-0 p-4">
                        <p className="text-white text-center font-semibold text-sm md:text-base drop-shadow-lg">
                            {title}
                        </p>
                    </div>
                )}
            </motion.div>
        </motion.div>
    )
}

export default TiltImageCard
