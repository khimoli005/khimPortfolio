// eslint-disable-next-line no-unused-vars
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { NavbarMenu } from '../../mockData/data';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode='wait'>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className='absolute top-20 left-0 w-full h-screen z-20'
          >
            <div className='text-xl font-semibold uppercase bg-white text-black py-10 m-6 rounded-3xl'>              
              <ul className="md:hidden flex flex-col h-screen justify-center items-center space-y-3 text-xl">
                                  {NavbarMenu.map((item) => {
                                      return (
                                        <li key={item.id}>
                                            <a 
                                                href={item.link}
                                                className='hover:scale-105 duration-200 font-semibold cursor-pointer'
                                            >
                                              <Link
                                              to={item.title}
                                              smooth={true}
                                              duration={500}
                                              offset={-70}
                                              activeClass='active' 
                                              > 
                                              {item.title} 
                                              </Link>
                                              
                                            </a>
                                        </li>
                                      );                            
                                  })}
                                </ul>
            </div>
          </motion.div>
        )}
    </AnimatePresence>
  );
};
ResponsiveMenu.propTypes = {
  open: PropTypes.bool.isRequired
};

export default ResponsiveMenu;

