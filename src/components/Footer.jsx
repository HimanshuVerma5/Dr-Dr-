import React from 'react';
import { assets } from '../assets/assets';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-white text-black py-12'>
      <div className='container mx-auto px-6 md:px-12 py-5'>
        <div className='flex flex-col md:flex-row justify-between items-start'>
     {/* Left Side */}
     <div className='w-full  md:w-1/3 flex flex-col mb-5 md:mb-0'>
            <div className='flex items-center gap-4 mb-4'>
              <img className="w-16 h-16" src={assets.logo} alt="Logo" />
              <p className='text-red-500 font-extrabold text-2xl'>
                Dr-Dr+
              </p>
            </div>
            <p className='text-gray-700 leading-relaxed'>
              Our hospital is dedicated to providing top-notch medical care with compassion and professionalism. We have been serving the community with excellence 
            </p>
          </div>

          {/* Center Side */}
          <div className='w-full md:w-1/3  flex flex-col mb-8 md:mb-0'>
            <h3 className='text-xl font-semibold mb-4 text-black'>Company</h3>
            <ul className='space-y-2'>
              <li><a href='/' className='text-gray-800 hover:text-red-500 transition-colors duration-300'>Home</a></li>
              <li><a href='/about' className='text-gray-800 hover:text-red-500 transition-colors duration-300'>About Us</a></li>
              <li><a href='/contact' className='text-gray-800 hover:text-red-500 transition-colors duration-300'>Contact Us</a></li>
              <li><a href='/privacy-policy' className='text-gray-800 hover:text-red-500 transition-colors duration-300'>Privacy Policy</a></li>
            </ul>
          </div>

          {/* Right Side */}
          <div className='w-full md:w-1/4 flex flex-col'>
            <h3 className='text-xl font-semibold mb-4 text-black'>Get In Touch</h3>
            <p className='text-gray-700 mb-2'>Phone: <a href='tel:9536045394' className='hover:text-red-500 transition-colors duration-300'>9536045394</a></p>
            <p className='text-gray-700 mb-4'>
              Email: <a href='mailto:himanshuverma57251@gmail.com' className='hover:text-red-500 transition-colors duration-300'>
                himanshuverma57251@gmail.com
              </a>
            </p>
            <div className='flex gap-4'>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-gray-700 hover:text-red-500 transition-colors duration-300'>
                <FaFacebookF size={20} />
              </a>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-gray-700 hover:text-red-500 transition-colors duration-300'>
                <FaTwitter size={20} />
              </a>
              <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='text-gray-700 hover:text-red-500 transition-colors duration-300'>
                <FaLinkedinIn size={20} />
              </a>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-gray-700 hover:text-red-500 transition-colors duration-300'>
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='bg-gray-100 text-gray-800 py-3  text-center'>
        <p>&copy; {new Date().getFullYear()} Dr-Dr+. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
