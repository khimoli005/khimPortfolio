// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
//import SliderImg from '../../assets/slider.png';
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
       <section>
          <div name="Home" className='container grid grid-cols-1 md:grid-cols-2 min-h-[550px] relative'>
            {/* Slider Info section */}
               <div className='flex flex-col justify-center py-14 md:py-0 font-playfair'>
                  <div className='text-center md:text-left space-y-6'>
                    <span className='text-xl'>Welcome In My Feed</span>
                      <div className='flex space-x-1 text-2xl md:text-4xl'>
                      <h1> Hello I am a</h1> 
                     {/* <span className='text-primary'>Namaste </span>  */}
                     <ReactTyped
                       strings={["Developer", "Programmer", "Designer"] }
                       typeSpeed={40}
                       backSpeed={50}
                       loop={true}
                      />             
                  </div>
                      <p className='text-gray-600 xl:max-w-[500px]'> 
                       I am a passionate web designer and developer with expertise
                       in creating visually appealing and user-friendly websites
                       </p>
                       {/*Social Media Icons section */}
                      <div className='flex justify-between'>
                       <div className=' space-y-2'>
                        <h1 className='text-bold'>
                          Available on</h1>
                        <ul className='flex space-x-5'>
                          <li>
                            <a href='https://www.facebook.com/khimoli'>
                              <FaFacebook  className='text-2xl cursor-pointer' />
                            </a>
                          </li>
                          <li>
                            <a href='https://www.linkedin.com/khimoli'>
                              <FaLinkedin className='text-2xl cursor-pointer' />
                            </a>
                          </li>
                          <li>
                            <a href='https://www.instagram.com/khimoli'>
                              <FaInstagramSquare className='text-2xl cursor-pointer' />
                            </a>
                          </li>
                          <li>
                            <a href='https://www.twitter.com/khimoli'>
                              <FaSquareXTwitter className='text-2xl cursor-pointer' />
                            </a>
                          </li>
                        </ul>
                       </div>
                       <div>
                        <h1 className='text-bold'>Currently working on</h1>
                          <div className='flex space-x-5'>
                          <SiMysql className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] ' />
                          <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] '  />
                          <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] '  />
                          <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] '  />
                        </div>
                       </div>
                     </div>
                   </div>
                </div>
            {/* Slider Image */}
            <div className='flex justify-center items-center'>
              <img
                //src={SliderImg}
                alt=''
                className='w-[350px] md:w-[550px] xl:w-[700px] drop-shadow'
                />
            </div>
           </div>       
       </section>
    </>
  );
};

export default Home;
