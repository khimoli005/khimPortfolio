// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaPlay } from 'react-icons/fa';
import SliderImg from '../../assets/slider.png';

const Hero = () => {
  return (
    <>
       <section>
          <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[550px] relative'>
            {/* Slider Info section */}
               <div className='flex flex-col justify-center py-14 md:py-0 font-playfair'>
                   <div className='text-center md:text-left space-y-6'>
                      <h1 className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal'>
                       Welcome to Khim Oli {" "}
                      <span className='text-primary'> Hello</span>
                      {" "}
                      </h1>
                      <p className='text-gray-600 xl:max-w-[500px]'> 
                        It is a long established fact that a reader will be distracted 
                        by the readable content of a page when looking at its layout.
                       </p>
                       {/* Button section */}
                       <div className='flex justify-center items-center gap-8 md:justify-start !mt-4'>
                        <button className='primary-btn flex items-center gap-2'>
                          {""}
                          Click Me
                        </button>
                        <button className='flex justify-center items-center gap-2'>
                         <FaPlay /> Watch Now
                         </button>
                       </div>
                   </div>
                </div>
            {/* Slider Image */}
            <div className='flex justify-center items-center'>
              <img
                src={SliderImg}
                alt=''
                className='w-[350px] md:w-[550px] xl:w-[700px] drop-shadow'
                />
            </div>
           </div>       
       </section>
    </>
  );
};

export default Hero;
