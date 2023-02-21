import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import { TextProps } from '../types/interface';

const NavigationBar: FC<TextProps> = ({ text }: TextProps) => {
  return (
    <nav className='bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <span className='self-center text-2xl block order-2 font-bold whitespace-nowrap dark:text-white'>Logo.</span>
        <div className='flex order-1'>
          {text === 'true' ? (
            <Link to='/'>
              <button
                type='button'
                className='text-white flex flex-row-reverse bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Home
                <svg
                  aria-hidden='true'
                  className='rotate-180 w-5 h-5 mr-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </button>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
