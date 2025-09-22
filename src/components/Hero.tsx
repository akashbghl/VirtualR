import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import { motion } from 'motion/react'

const Hero = () => {
    return (
        <div className='flex flex-col items-center mt-6 lg:mt-20'>
            <motion.h1
                initial={{ y: '20px', opacity: 0 }}
                animate={{ y: '0px', opacity: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
                VirtualR build tools
                <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
                    {" "}for developers</span>
            </motion.h1>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi cum, nemo porro iusto soluta odio quia quidem dolor inventore. Consectetur unde adipisci ipsum distinctio.
            </p>
            <div className='flex flex-col max-md:space-y-2 lg:flex-row justify-center m-10'>
                <a href="#"
                    className='bg-gradient-to-r from-orange-500 to-red-800 py-3 px-4 mx-2 rounded-md'>
                    Start for free
                </a>
                <a href="#" className='py-3 px-4 mx-2 rounded-md border'>
                    Documentation
                </a>
            </div>
            <motion.div
                initial={{ opacity: 0, y: '20px' }}
                animate={{ opacity: 1, y: '0px' }}
                transition={{ duration: 1, delay: 1.5, type: 'spring', stiffness: 50 }}
                className='flex max-md:flex-col items-center mt-10 justify-center'>
                <video
                    src={video1}
                    loop
                    muted
                    autoPlay
                    className='rounded-lg w-1/2 max-md:w-full border border-orange-700 shadow shadow-orange-400 mx-2 my-4'
                >
                </video>
                <video
                    src={video2}
                    loop
                    muted
                    autoPlay
                    className='rounded-lg w-1/2 max-md:w-full border border-orange-700 shadow shadow-orange-400 mx-2 my-4'
                >
                </video>
            </motion.div>
        </div>
    )
}

export default Hero
