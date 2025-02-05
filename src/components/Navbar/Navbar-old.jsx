import React from 'react';
import { NavbarMenu } from '../../mockData/data';
import { PiArrowCircleRightLight } from "react-icons/pi";
import { MdMenu } from 'react-icons/md';
import ResponsiveMenu from './ResponsiveMenu';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      { /* Navbar section */ }
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 ">
          <div className='container flex items-center justify-between py-2 '>
               { /* Logo section */}
               <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                  <PiArrowCircleRightLight />
                  <p>Khim</p>
                  <p className='text-secondary'>Oli</p>
               </div>
               { /* Menu Section */}
               <div className='hidden md:block'>
                 <ul className="flex items-center gap-6 text-gray-600 font-bold uppercase">
                    {NavbarMenu.map((item) => {
                        return (
                          <li key={item.id}>
                              <a 
                                  href={item.link}
                                  className='inline-block py-1 px-3 hover:text-primary font-semibold'
                              >
                                <Link to={item.title}
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
              { /* Icons section */}
              <div className='flex items-center gap-4'>
                <button className='hover:bg-primary hover:text-primary font-semibold hover:text-white rounded-md 
                border-2 border-primary px-6 py-2 duration-200 hidden md:inline-block'>
                    Login
                </button>
              </div>
              { /* Mobile menu section */}
              <div className='md:hidden' onClick={() => 
              setOpen(!open)}>
                <MdMenu className='text-4xl' />
              </div>
           </div>
      </nav>

      { /* Mobile Sidebar section */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
