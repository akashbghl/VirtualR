import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
      <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
        VirtualR build tools
        <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
        {" "}for developers</span>
      </h1>
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
      <div className='flex max-md:flex-col items-center mt-10 justify-center'>
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
      </div>
    </div>
  )
}

export default Hero
