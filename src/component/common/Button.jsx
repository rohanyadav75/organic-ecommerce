import React from 'react'
import SpecularButton  from '../react-bits/SpecularButton';
const Button = () => {
    return (
        <div>
            <SpecularButton
                size="md"
                radius={5}
                tint="#f8c32c"
                tintOpacity={0.8}
                blur={5}
                textColor="#000000"
                lineColor="#ffffff"
                baseColor="#F8C32C"
                intensity={1.2}
                shineSize={12}
                shineFade={36}
                thickness={1.1}
                speed={0.4}
                followMouse
                proximity={250}
                autoAnimate={false}
            >
                Get Started
            </SpecularButton>
            {/* <button className='text-[14px]  txt-primary bg-fourth hover:text-white rounded-[5px] px-5 p-2'>
                Learn More
            </button> */}
        </div>
    )
}

export default Button
